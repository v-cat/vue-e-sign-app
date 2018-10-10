<template>
    <div class="upload">
        <!-- <div style="height:300px;width:300px;  background: #dadada;">
        </div> -->
        <ul>
            <li>
                <div class="file" v-bind:class="{ backgroung: isBackgroung, 'backgroungWhite': hasError }">
                    <input type="file" accept="image/png" name="file" @change="FileChange">
                    <img style="height: 153px;width: 153px;margin: 0 auto;cursor: pointer" v-if="file.base64!==''" :src="file.base64">
                </div>
            </li>
            <li>
                <h4 class="fileName color-mSuc" style="margin-top: 20px" v-if="isUpload">{{file.name}}</h4>
            </li>
            <li>
                <a @click="EsealSave" class="contract-my-codes search-infor-button">
                    制章
                </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
@import './upload.css';
</style>
<script src="./upload.js"></script>