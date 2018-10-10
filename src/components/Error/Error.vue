<template>
    <div class="error-head">
        <div class="error-notfound">

            <div class="error-404">
                500 错误!
            </div>
            <div class="error-sorry">
                sorry，您要访问的页面不见了！
            </div>
            <div class="error-enter">
                <router-link to="/home" class="login-wrap-error">返回主页</router-link>
                <!-- <router-link>返回主页</router-link> -->
            </div>
        </div>
    </div>
</template>
<style scoped>
@import './Error.css';
</style>
<script src="./Error.js"></script>