<template>
  <div class="login-container">
    <i class="panel-bg" />
    <span class="app-title">{{this.$store.state.settings.apptitle}}</span>
    <img src="https://uocu.oss-cn-beijing.aliyuncs.com/home.gif" class="login-gif">
    <el-card class="login-card">
      <div slot="header" class="clearfix">
        <span>{{this.$store.state.settings.apptitle}}</span>
      </div>

      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="账号"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye-close' : 'eye'" />
          </span>
        </el-form-item>
        <span class="lost-password">忘记密码</span>
        <el-button :loading="loading" type="primary" style="width:100%;margin-top:20px;" @click.native.prevent="handleLogin">登录</el-button>

      </el-form>
    </el-card>
    <i class="panel-bg2" />
    <el-card class="login-panel" />
    <div class="login-fotter">
      <h3 class="webInfo">© 2019 UOCU 1.0 ⋅ 皖ICP备18005431号</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('请输入正确的账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码最短为6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456789'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: black)) {
  .login-container .el-input input {
    color: balck;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 80%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: black;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #e2e2e2 inset !important;
        -webkit-text-fill-color: black !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 400px;
    max-width: 100%;
    padding: 30px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: black;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 30px;
      color: black;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.login-card{
  width: 400px;
  position: absolute;
  top: 30%;
  right: 16%;
  height: 50%;
  z-index: 100;
  border-radius:20px 20px 0 0;
}
.login-gif{
  position: absolute;
  top: 10%;
  left: 10%;
  height: 80%;
}
.login-fotter{
    position: fixed;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    color: #ccc;
    font-family: Arial,serif;
    font-size: 15px;
    letter-spacing: 1px;
    text-align: center;
}
.login-panel{
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30%;
  z-index: 1;
  background-image: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
}
.panel-bg{
    display: inline-block;
    width: 166px;
    height: 178px;
    background: url(https://uocu.oss-cn-beijing.aliyuncs.com/decoration1%402x.png) no-repeat 0 0;
    background-size: 166px 178px;
    position: absolute;
    top: 0;
    left: 60px;
    z-index: 3;
}
.panel-bg2{
    display: inline-block;
    width: 166px;
    height: 178px;
    background: url(https://uocu.oss-cn-beijing.aliyuncs.com/decoration1%402x.png) no-repeat 0 0;
    background-size: 166px 178px;
    position: absolute;
    bottom: 5%;
    right: 27.5%;
    z-index: 3;
}
.clearfix{
  font-size: 40px;
  text-align: center;
  font-weight: 500;
  font-family: PingFangSC-Medium;
  height: 80px;
  line-height: 80px;
}
.app-title{
    display: block;
    font-size: 50px;
    line-height: 1.5;
    color: #0252d9;
    font-family: TencentSansW7;
    position: absolute;
    top: 30px;
    left:250px;
}
.lost-password{
  display: flex;
  justify-content: flex-end;
}
</style>
