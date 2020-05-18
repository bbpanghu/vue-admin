<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-card class="list-card">
      <div slot="header" class="clearfix">
        <span>相关链接</span>
      </div>
      <div class="list-body">
        <el-tag><a href="https://vuejs.org" target="_blank">vue</a></el-tag>
        <el-tag type="success">vue-admin-template</el-tag>
        <el-tag type="info"><a href="https://guthub.com/bypanghu/vue-admin" target="_blank">github</a></el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
  .list-card{
    width: 40%;
    border-radius: 10px;
    padding: 20px;
  }
</style>
