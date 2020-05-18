<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-popover
        placement="bottom"
        width="300"
        trigger="click"
      >
        <p class="notice-title">
          <i class="el-icon-success" />通知</p>
        <div class="notice-content">
          欢迎使用uocu后台~
        </div>
        <el-button slot="reference" class="right-menu-item">
          <svg-icon icon-class="notice" class-name="notice" />
        </el-button>
      </el-popover>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              控制台
            </el-dropdown-item>
          </router-link>
          <router-link to="/mine">
            <el-dropdown-item>
              个人信息
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登陆</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'

  export default {
    components: {
      Breadcrumb,
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
      async logout() {
        await this.$store.dispatch('user/logout')
        this.$message({
          message: '退出登陆成功',
          type: 'success'
        })
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .right-menu {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      line-height: 50px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        margin: 0 60px;
        height: 100%;
        // font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;
        border: 0px;
        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 60px !important;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }

  .app-notice{
    justify-content: flex-end;
    width: 40px;
    height: 40px;

  }
  .notice{
    width: 25px !important;
    height: 25px !important;
    margin: auto;
  }
  .notice-title{
    text-align: center;
    font-size: 20px;
  }
  .el-icon-success{
    margin-right: 12px;
    color: greenyellow;
  }
  .notice-content{
    padding: 10px;
  }
</style>
