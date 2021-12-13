<template>
  <div class="login">
    <div class="container">
      <div class="login-title">用户登录</div>
      <el-form class="login-form">
        <el-form-item>
          <el-input v-model="loginform.user" placeholder="admin">
            <template v-slot:prefix>
              <el-icon class="el-input__icon"><avatar /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginform.password" type="password" placeholder="888888">
            <template v-slot:prefix>
              <el-icon class="el-input__icon"><goods-filled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import bg from '@/assets/image/bg.jpg'
import { defineComponent, reactive, computed } from 'vue'
export default defineComponent({
  setup () {
    const loginform = reactive({
      user: '',
      password: ''
    })
    const login = () => {
      console.log(loginform.user)
    }
    const bgimage = computed(() => {
      return `url(${bg})`
    })
    return {
      loginform,
      login,
      bgimage
    }
  }
})
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  width:100vw;
  background-image: v-bind(bgimage);
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container{
    margin-top: -30px;
    width: 380px;
    .login-title{
      text-align: center;
      font-weight: 700;
      font-size: 30px;
    }
    .login-form{
      margin-top: 30px;
      .login-btn{
        width: 100%;
      }
    }
  }

}
</style>
