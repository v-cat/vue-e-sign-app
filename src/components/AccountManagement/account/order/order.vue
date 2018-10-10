<template>
    <div class="order">

        <!-- <div class="order-contract-body"> -->

        <!-- <div class="contract-my-seals"> -->
        <div class="select-head">

            <div class="New-select">
                <el-input v-model="input" placeholder="输入订单号" size="mini"></el-input>

                <!-- <input type="text" placeholder="请输入合同主题" v-model="verecordname" @keyup.enter="SearchInterTaskpoolLis()"> -->
            </div>
            <div class="New-button">
                <span class="search-infor-btn">查询</span>
                <!-- <span class="search-infor-btn" v-if="delectAll" @click="Delet(tableData.verecordid)">全部删除</span> -->
                <!-- <span class="search-infor-btn" v-else>全部删除</span> -->
                <!-- <span class="search-infor-btn" v-if="readAll" @click="IsRead">全部标记为已读</span> -->
                <!-- <span class="search-infor-btn" v-else>全部标记为已读</span> -->
            </div>
        </div>
        <div class="contract-my-seall" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(236,235, 235, 0.8)">
            <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%" height="400">
                <el-table-column type="index" width="50" align="center">
                </el-table-column>
                <el-table-column property="vorderCode" label="订单号" width="250" align="center">
                </el-table-column>
                <el-table-column property="tcreateDate" label="购买时间" width="250" align="center">
                </el-table-column>
                <el-table-column property="vproductName" label="套餐名称" align="center" width="150">
                </el-table-column>
                <!-- <el-table-column property="ltype" label="发票状态" width="100" align="center" header-align="center">
                    <template slot-scope="scope">
                        <span>
                            {{scope.row.ltype === 1 ? "已开":"未开"}}
                        </span>
                    </template>
                </el-table-column> -->
                <el-table-column property="ltype" label="购买状态" width="100" align="center" header-align="center">
                    <template slot-scope="scope">
                        <span>
                            {{scope.row.ltype === 1 ? "已支付":"未支付"}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column property="lamount" align="center" width="90" label="文件份数">
                </el-table-column>

                <el-table-column property="lprice" align="center" width="80" label="实付款" style="color: red">
                </el-table-column>

                <!-- <el-table-column label="操作 " align="center " width="100" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <a class="search-infor-btn">删除</a> -->
                <!--  @click="Delet(scope.row.verecordid)" -->
                <!-- </template>
                </el-table-column> -->
            </el-table>
        </div>
        <div class="contract-my-page">
            <el-pagination @size-change="PagingSizeChange" @current-change="PagingChange" :current-page.sync="paging.current" :page-sizes="[10, 20, 30 ]" :page-size="paging.limit" :pager-count="5" layout="total, sizes, prev, pager, next, jumper" :total="paging.total">

            </el-pagination>

        </div>
    </div>
</template>
<style scoped>
@import './order.css';
</style>
<style>
.contract-my-seall .el-table.el-table--fit.el-table--enable-row-hover {
  margin-left: auto;
  margin-right: auto;
}
.has-gutter .el-table_1_column_8 div {
  font-weight: 600;
  color: black;
}
.el-table__row .el-table_1_column_8 div {
  color: red;
}
.order .btn-prev .el-icon-arrow-left:before {
  content: '\E600';
}
.order .btn-next .el-icon-arrow-right:before {
  content: '\E604';
}
</style>
<script src="./order.js"></script>