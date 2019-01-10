<template>
  <div
    id="person "
    class="ContractManagement-head"
  >
    <persenalnav></persenalnav>
    <!-- 导航条 -->
    <div class="navigation-back"></div>
    <div class="ContractManagement margin100">
      <!-- 合同导航 -->
      <div class="navigation">
        <ul>
          <li>
            <input
              type="text"
              placeholder="请输入合同主题"
              v-model="verecordname"
              @keyup.enter="SearchInterTaskpoolLis()"
            >

          </li>
          <li>
            <a
              class="search-infor-a"
              @click="SearchInterTaskpoolLis()"
            >查询</a>
          </li>
          <li>
            <!-- <el-badge :value="3" :max="99" class="item"> -->
            <a
              class="search-infor-words"
              @click="GetInformation('001,002,000,099,004,003,005,100')"
              v-bind:class="{ active:'001,002,000,099,004,003,005,100'== isActive }"
            >全部文件</a>
            <!-- </el-badge> -->
          </li>
          <li>
            <!-- <el-badge :value="3" :max="99" class="item"> -->
            <a
              class="search-infor-words"
              @click="GetInformation('001,004')"
              v-bind:class="{ active:'001,004'== isActive }"
            >待我签</a>

            <!-- </el-badge> -->
          </li>
          <li>
            <!-- <el-badge :value="3" :max="99" class="item"> -->
            <a
              class="search-infor-words"
              @click="GetInformation('002')"
              v-bind:class="{ active:'002'== isActive }"
            >待他签</a>

            <!-- </el-badge> -->
          </li>
          <li>
            <!-- <el-badge :value="3" :max="99" class="item"> -->
            <a
              class="search-infor-words"
              @click="GetInformation('099')"
              v-bind:class="{ active:'099'== isActive }"
            >已完成</a>

            <!-- </el-badge> -->
          </li>
          <li>
            <!-- <el-badge :value="3" :max="99" class="item"> -->
            <a
              class="search-infor-words"
              @click="GetInformation('003')"
              v-bind:class="{ active:'003'== isActive }"
            > 已撤销</a>

            <!-- </el-badge> -->
          </li>
          <!-- <li>
            <a class="search-infor-words" @click="GetInformation('003')" v-bind:class="{ active: isActive }">已撤销</a>

          </li> -->
          <li>
            <!-- <el-badge :value="3" :max="99" class="item"> -->
            <a
              class="search-infor-words"
              @click="GetInformation('005')"
              v-bind:class="{ active:'005'== isActive }"
            >已拒签</a>

            <!-- </el-badge> -->
          </li>
          <li class="navigation-draft">
            <!-- <el-badge :value="3" :max="99" class="item"> -->

            <a
              class="search-infor-words"
              @click="GetInformation('000')"
              v-bind:class="{ active:'000'== isActive }"
            >已作废</a>
            <!-- </el-badge> -->
          </li>
          <li>
            <a
              v-if="isInit"
              @click="SyncPPList"
              class="search-infor-a margin10"
            >同步数据</a>
          </li>
          <li>
            <router-link
              to="/UploadContracts"
              class="search-infor-a margin50"
            >签发文件</router-link>
          </li>
        </ul>
      </div>
      <!-- 合同表格 -->
      <div>
        <ul>
          <li>
            <div class="contract-my-words">
              <a class="contract-my-back"></a>
              <div class="contract-my-text">
                <el-table
                  ref="table"
                  :data="tableData"
                  highlight-current-row
                  v-loading="loading"
                  element-loading-text="拼命加载中"
                  element-loading-background="rgba(236,235, 235, 0.8)"
                >
                  <el-table-column
                    type="index"
                    width="100"
                    align="center"
                    header-align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    property="vtaskstr"
                    label="状态"
                    width="150"
                    align="center"
                    header-align="center"
                  >
                    <template slot-scope="scope">
                      <span>
                        <!-- {{scope.row.vtaskstr}}s -->
                        {{$valkey($param.contractState['s'+scope.row.vtaskstr],'name')}}
                      </span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    property="verecordname"
                    label="合同名称"
                    width="250"
                    align="center"
                    header-align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    property="tcreatedate"
                    label="发起时间"
                    :formatter="dateFormat"
                    width="150"
                    align="center"
                    header-align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    property="vcreateusercode"
                    label="发件人"
                    width="200"
                    align="center"
                    header-align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    property="verecordid"
                    label="操作"
                    width="250"
                    align="center"
                    header-align="center"
                  >
                    <template slot-scope="scope">
                      <div class="search-head">
                        <a
                          class="search-infor-btn"
                          v-if="scope.row.vtaskstr==='001'"
                          @click="HandSign(scope.row.verecordid)"
                        >手写</a>
                        <a
                          class="search-infor-btn"
                          v-if="scope.row.vtaskstr==='001'"
                          @click="GoSign(scope.row.verecordid)"
                        >签署</a>
                        <a
                          class="search-infor-btn"
                          @click="Preview(scope.row.verecordid)"
                        >预览</a>
                        <!-- v-if="scope.row.vtaskstr==='001'" -->
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>

            </div>
            <div class="contract-my-page">
              <el-pagination
                :page-sizes="[10, 20, 30]"
                :pager-count="5"
                :page-size="paging.limit"
                :current-page.sync="paging.current"
                @size-change="PagingSizeChange"
                layout="total, sizes, prev, pager, next, jumper"
                background
                @current-change="PagingChange"
                :total="paging.total"
              >
              </el-pagination>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 尾部 -->
    <foot></foot>
  </div>
</template>
<style scoped>
@import "./ContractManagement.css";
</style>
<style>
@import "./ContractManagementRepir.css";
</style>
 <script src='./ContractManagement.js'>
</script>
