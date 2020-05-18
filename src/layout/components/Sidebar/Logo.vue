<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo-small">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'SidebarLogo',
    props: {
      collapse: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        title: this.$store.state.settings.apptitle,
        logo: this.$store.state.settings.logo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebarLogoFade-enter-active {
    transition: opacity 1.5s;
  }

  .sidebarLogoFade-enter,
  .sidebarLogoFade-leave-to {
    opacity: 0;
  }

  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 100px;
    line-height: 100px;
    background: #fff;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
      height: 100%;
      width: 100%;

      & .sidebar-logo {
        display: inline-block;
        line-height: 50px;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-right: 12px;
      }
      & .sidebar-logo-small {
        width: 50px;
        height: 50px;
        vertical-align: middle;
        margin-right: 12px;
      }

      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #0252d9;
        font-weight: 600;
        line-height: 50px;
        font-size: 30px;
        font-family:TencentSansW7;
        vertical-align: middle;
      }
    }

    &.collapse {
      .sidebar-logo {
        margin-right: 0px;
      }
    }
  }
</style>
