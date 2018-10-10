<template>
    <div class="tabs">
        <div class="tabs-bar">
            <!-- 标签页标题，这里要用v-for -->
            <div class="tabs-head">
                <div v-for="(item,index) in naveList" :key="item.id" :class="tabCls(item)" @click="handleChange(index)">
                    {{item.label}}
                </div>
            </div>

            <div>
                <div class="tabs-content">
                    <!--这里的slot就是嵌套的pane -->
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script src='./ProductNav.js'>
</script>
