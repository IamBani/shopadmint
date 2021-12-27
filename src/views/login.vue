<template>
  <div class="login">
    <div class="container">
      <div class="login-title">
         <el-image
          :src="logo"
          fit="contain"
          class="logo">
        </el-image>
        <span class="title">Vue Element Admin</span>
      </div>
      <el-form class="login-form" ref="formLoginRef"  :model="loginform"   :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="loginform.username" placeholder="admin">
            <template v-slot:prefix>
              <el-icon class="el-input__icon"><avatar /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item  prop="password">
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
import logo from '@/assets/image/logo.png'
import { defineComponent, reactive, computed, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from '@/store/index'
import axios from 'axios'
import { LoginParams } from '@/api/apiResponseInterface'
export default defineComponent({
  setup () {
    const store = useStore()
    const loginform:LoginParams = reactive({
      username: '',
      password: ''
    })
    const formLoginRef = ref()
    const login = () => {
      console.log(loginform.username)
      formLoginRef.value.validate(async (valid, errform) => {
        if (valid) {
          // axios.post('/')
          const res = await store.dispatch('login/login', { ...loginform })
          console.log(res)
        } else {
          console.log('error submit!!')
          for (const item of Object.keys(errform)) {
            ElMessage.error(errform[item][0].message)
            return false
          }
        }
      })
    }

    const bgimage = computed(() => {
      return `url(${bg})`
    })
    const rules = reactive({
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'change'
        }
      ]
    })
    return {
      loginform,
      login,
      bgimage,
      logo,
      rules,
      formLoginRef
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
      .logo{
        height: 44px;
        vertical-align: top;
        margin-right: 16px;
      }
      .title{
        color: #fff;
      }
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
