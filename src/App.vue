<template>
  <div class="height100">
    <router-view v-if="isRoutreAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRoutreAlive: true
    }
  },
  methods: {
    reload() {
      this.isRoutreAlive = false
      this.$nextTick(function() {
        this.isRoutreAlive = true
      })
    },
    redirect(options) {
      var url = options.attr('val')
      window.location.href = url
    }
  }
}
</script>
<style>
#app {
  margin: 0;
  padding: 0px;
  width: 100%;
  height: 100%;
}
body {
  font-family: 'Microsoft YaHei', sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  width: 100%;
  background: #ecebeb;
  margin: 0px;
  text-align: center;
}
.height100 {
  height: 100%;
}
html,
body,
#app {
  height: 100%;
}
#activeLink {
  color: #be926f;
}
</style>
