<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  #app{
    width: 100%;
    height: 100%;
    overflow: auto;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,å¾®è½¯é›…é»‘,Arial,sans-serif;
  }
  #app::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  #app::-webkit-scrollbar-thumb{
    background: #ccc;
    border-radius: 10px;
  }
  #app::-webkit-scrollbar-track {
    background: #fff;
    box-shadow: inset 0 0 5px #ccc;
    border-radius: 10px;

  }

</style>
