<template>
  <div id="person" class="Preview-head" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
    <!-- <my-head></my-head> -->
    <!-- 导航文字 -->
    <persenalnav></persenalnav>
    <!-- 导航条 -->
    <div class="header" id="searchBar">
      <div class="navigation-back"></div>
    </div>
    <div class="contract-body">
      <!-- 合同信息 -->
      <div class="contract-information">
        <table class="contract-infor-img">
          <tr>
            <td>
              <div class="contract-infor-back"></div>
              <span id="activeLink"> 合同信息</span>
              <div class="contract-information-button">
                <a class="search-infor-button" @click="$router.back(-1)">返回</a>
                <a class="search-infor-button" @click="Print">打印</a>
                <a class="search-infor-button" @click="Download">下载</a>
              </div>
              <div class="contract-infor-squar">
              </div>

            </td>
          </tr>
        </table>
      </div>
      <!-- 合同信息名称 -->
      <div class="navigation">
        <ul>
          <li>
            <el-row>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">合同名称: {{erecord.verecordname}}</div>

              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">合同编码: {{erecord.vcontractcode}}</div>

              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">创建时间: {{erecord.tcreatedate }}</div>
              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">截止时间: {{erecord.tenddate === null ? '无限期': erecord.tenddate }}</div>
              </el-col>
              <el-col :span="4.8">
                <div class="grid-content bg-purple">备注信息: {{erecord.vremark}}</div>
              </el-col>
            </el-row>
          </li>
        </ul>
      </div>
      <div style="width:1000px;margin: -30px auto; ">
        <el-table ref="table" :data="detailList" style="width: 100% ; border-radius: 20px;" size='mini' align="center">
          <el-table-column type="index" width="100" align="center"></el-table-column>
          <el-table-column property="itype" label="签署形式" width="150" align="center">
            <!-- <template slot-scope="scope">
              <span>
                {{$valkey($param.contractState['s'+scope.row.itype],'name')}}
              </span>
            </template> -->
          </el-table-column>
          <el-table-column property="vnodename" label="账号" width="250" align="center"></el-table-column>
          <el-table-column property="vsourceelecode" label="机构" width="250" align="center"></el-table-column>
          <el-table-column property="vstate" label="签署时间" width="250" align="center"></el-table-column>
        </el-table>
      </div>
      <!-- 合同详情 -->
      <div>
        <ul>
          <li>
            <div class="contract-my">
              <div class="contract-my-words">
                <div class="contract-my-back">
                  <div class="width800" v-for="(item,idx) in imgList" :style="{backgroundImage: 'url(' + item + ')', backgroundSize:'contain'}"></div>
                  <!-- <img class="contractFile" v-for="(item,idx) in imgList" :src="item"></div> -->
                </div>
              </div>
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
@import './Preview.css';
</style>
<script src='./Preview.js'></script>
