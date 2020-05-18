<template>
  <div class="mine">
    <el-row :gutter="20" >
      <el-col :span="8">
        <el-card style="margin-left: 10%;">
          <div class="user-headpic">
            <div class="user-headpic-item" :style="{ 'background-image': 'url(' + avatar + ')','background-repeat':'no-repeat','background-size':'cover' }" ></div>
          </div>
           <div class="user-name">{{name}}</div>
           <div class="user-item">
             <div class="user-item-item">
               <i class="el-icon-phone-outline"></i>
               <span class="user-item-item">{{phone}}</span>
             </div>
             <div class="user-item-item">
               <i class="el-icon-message"></i>
               <span class="user-item-item">{{mail}}</span>
             </div>
             <div class="user-item-item">
               <i class="el-icon-postcard"></i>
               <span class="user-item-item">{{admin}}</span>
             </div>
           </div>
               <el-divider content-position="left"><el-tag type="info">下属</el-tag></el-divider>
           <div class="user-tag">
             <el-tag>标签一</el-tag>
             <el-tag type="success">标签二</el-tag>
             <el-tag type="info">标签三</el-tag>
             <el-tag type="warning">标签四</el-tag>
             <el-tag type="danger">标签五</el-tag>
           </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card style="margin-left: 5%;" class='set-user'>
          <div slot="header" class="set-header">
              <span class="header-title">基本设置</span>
            </div>
          <el-form ref="form" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="name" disabled></el-input>
            </el-form-item>
            <el-form-item label="头像">
              <div class="user-headpic-update" :style="{ 'background-image': 'url(' + avatar + ')','background-repeat':'no-repeat','background-size':'cover' }" ><span class="update" @click="picUpdate">重新上传</span>
                </div>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="phone" ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="mail" ></el-input>
            </el-form-item>
            <el-form-item label="管理">
              <el-input v-model="admin" disabled></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="">保存</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'name',
        'avatar'
      ])
    },
    data() {
      return {
          phone : '123456789',
          mail: 'bypanghu@163.com',
          admin : 'UOCU官方'
      }
    },
    created() {

    },
    methods: {
      picUpdate(){
        this.$message({
          message : '图片上传',
          type : 'success'
        })
      }
    },
 }
</script>

<style scoped  lang="scss">
  .mine{
    width: 100%;
  }
  .user-headpic{
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }
  .user-headpic-item{
    width: 80px;
    height: 80px;
  }
  .user-headpic-update{
    width: 80px;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    .update{
      height: 80px;
      width: 80px;
      text-align: center;
      color:transparent;
      &:hover{
        color:#fff;
      }
    }
    &:hover{
      background: rgba(0, 0, 0, .6);
    }
  }
  .user-name{
      text-align: center;
      font-size: 18px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0,0,0,.85);
      margin-bottom: 10px;
      margin-top: 10px;
  }
  .user-item{
    margin: 50px 20px;
  }
  .user-item-item{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .user-tag{
    padding: 10px;
    margin-bottom: 50px;
  }
  .set-user{
    border-radius: 20px 20px 0 0;
    .set-header{
      height: 30px;
      line-height: 30px;
      font-size: 22px;
      .header-title{
        border-bottom: 2px solid #3788ee;
        padding: 20px;
      }
    }
  }
</style>
