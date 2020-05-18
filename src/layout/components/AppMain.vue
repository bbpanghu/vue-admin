<template>
  <div class="main">
    <el-card class="app-main">
      <div slot="header" class="app-title">
        <span>{{ title }}</span>
      </div>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </el-card>
    <div class="app-fotter">
      <span class="webInfo">© 2019 UOCU 1.0 ⋅ 皖ICP备18005431号</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.path
      },
      title() {
        return this.$route.meta.title
      }
    }
  }
</script>

<style scoped>
  .main{
    padding: 20px;
    margin-top: 50px;
    background-color: #EBEEF5;
  }
  .app-main{
    min-height: calc(100vh - 100px);
    position: relative;
    height: calc(80vh);
    overflow: auto;
    border: 1px solid #ccc;
    background-color: #fff !important;
    border-radius:10px
  }
  .app-main::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .app-main::-webkit-scrollbar-thumb{
    background: #ccc;
    border-radius: 10px;
  }
  .app-main::-webkit-scrollbar-track {
    background: #fff;
    box-shadow: inset 0 0 5px #ccc;
    border-radius: 10px;

  }
  .fixed-header+.app-main {
    padding-top: 50px;
  }
  .app-title{
    margin-left: 20px;
    font-weight: 800;
    font-size: 25px;
  }
  .app-fotter{
    width: 100%;
    color: rgba(0,0,0,.45);
    font-family: Arial,serif;
    font-size: 13px;
    letter-spacing: 1px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>
