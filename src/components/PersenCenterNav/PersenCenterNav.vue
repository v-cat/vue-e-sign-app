<template>
    <div class="persenalnav">
        <!-- 导航文字 -->
        <div class="navigationWords " id="searchBar">
            <div class="navigation-a">
                <ul class="navigation-ul">
                    <li class="words-nav">
                        <router-link to="/PersonalCenter">首页</router-link>
                    </li>
                    <li class="words-nav">
                        <router-link to="/contractManagement">文件管理</router-link>
                    </li>
                    <li class="words-nav">
                        <router-link to="/accountManagement/personalinfor">个人中心</router-link>
                    </li>
                    <li class="floatright icons-nav">
                        <!-- 导航图标 -->
                        <div class="navigationIcons">
                            <ul class="navigation-ul">
                                <li>
                                    <el-row class="block-col-2">
                                        <el-col>
                                            <el-dropdown>
                                                <span class="el-dropdown-link">

                                                    <svg class="navigationIcon " aria-hidden="true" color='black'>
                                                        <use class="white" xlink:href="#icon-ren"></use>
                                                    </svg>

                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>
                                                        <router-link class="selectTo" to="/accountManagement">个人中心 </router-link>
                                                    </el-dropdown-item>

                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                    <el-row class="block-col-2">
                                        <el-col>
                                            <el-dropdown>

                                                <span class="el-dropdown-link">
                                                    <svg class="navigationIcon " aria-hidden="true" color='black'>
                                                        <use class="white" xlink:href="#icon-xiazai1"></use>
                                                    </svg>
                                                </span>

                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>
                                                        <a class="selectTo" @click="Buy('2')">购买套餐 </a>
                                                    </el-dropdown-item>

                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                    <el-row class="block-col-2">
                                        <el-col>
                                            <el-dropdown>
                                                <el-badge :value="number" :max="99" class="item">
                                                    <span class="el-dropdown-link">
                                                        <svg class="navigationIcon " aria-hidden="true" color='black'>
                                                            <use class="white" xlink:href="#icon-xiaoxi"></use>
                                                        </svg>
                                                    </span>
                                                </el-badge>
                                                <el-dropdown-menu slot="dropdown">

                                                    <el-dropdown-item>

                                                        <router-link class="selectTo" to="/news"> 最新消息 </router-link>

                                                    </el-dropdown-item>

                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                </li>
                                <li>
                                    <el-row class="block-col-2">
                                        <el-col>
                                            <el-dropdown>

                                                <span class="el-dropdown-link">
                                                    <svg class="navigationIcon " aria-hidden="true" color='black'>
                                                        <use class="white" xlink:href="#icon-tuichu"></use>
                                                    </svg>
                                                </span>

                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>
                                                        <router-link class="selectTo" to="/accountManagement">修改密码 </router-link>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <router-link class="selectTo" to="/Home">返回主页 </router-link>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item>
                                                        <a @click="quit()" class="selectTo">安全退出 </a>
                                                    </el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </el-col>
                                    </el-row>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
        </div>

    </div>
</template>
<style scoped>
@import '../../assets/css/navs.css';
</style>
<style>
@import './PersenCenterNav.css';
</style>
<script src='./PersenCenterNav.js' >
</script>
 