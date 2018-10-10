<template>
  <div class="contract" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <!-- 合同表格 -->

    <ul>
      <li>
        <div class="contract-my-back">
          <div class="contract-my-text">
            <div class="select-head">

              <div class="New-select">
                <el-select v-model="value" placeholder="选择消息类型" size="mini" @change="changeRead">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="New-button">
                <span class="search-infor-btn" v-if="delectAll" @click="Delet(tableData.verecordid)">全部删除</span>
                <span class="search-infor-btn" v-else>全部删除</span>
                <span class="search-infor-btn" v-if="readAll" @click="IsRead">全部标记为已读</span>
                <span class="search-infor-btn" v-else>全部标记为已读</span>
              </div>
            </div>
            <div class="New-seal">
              <el-table ref="table" :data="tableData" align="center" tooltip-effect="dark" style="width: 100%" height="380" @select-all="SelectAll" @select="SelectOne" @selection-change="handleSelectionChange">
                <el-table-column type="selection" align="center" width="55">
                </el-table-column>
                <el-table-column prop="tcreateDate" label="接收日期" align="center" width="110">
                </el-table-column>
                <el-table-column prop="vsenderUsername" label="发件人" align="center" width="100">
                </el-table-column>
                <el-table-column prop="vtitle" label="主题" align="center" width="120">
                </el-table-column>
                <el-table-column prop="vmessage" label="消息内容" align="center" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作 " align="center " width="200 " show-overflow-tooltip>
                  <template slot-scope="scope">
                    <router-link to="contractManagement" class="search-infor-btn">详情</router-link>
                    <!-- @click="Detial('001,004')" -->
                    <a class="search-infor-btn" v-if="scope.row.lisRead===0" @click="IsRead">标为已读</a>
                    <a class="search-infor-btn" @click="Delet(scope.row.verecordid)">删除</a>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div class="contract-my-page">

          <el-pagination @size-change="PagingSizeChange" @current-change="PagingChange" :current-page.sync="paging.current" :page-sizes="[10, 20, 30 ]" :page-size="paging.limit" :pager-count="5" layout="total, sizes, prev, pager, next, jumper" :total="paging.total">
          </el-pagination>

        </div>
      </li>
    </ul>

  </div>
</template>
<style scoped>
@import './contract.css';
@import '../../../assets/css/navs.css';
</style>
 
<script src='./contract.js' >
</script>
 