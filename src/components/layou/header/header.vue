<template>
  <el-header class="header">
    <el-space class="space">
      <el-icon><search /></el-icon>
      <el-icon><full-screen /></el-icon>
      <el-icon><refresh /></el-icon>
    <el-dropdown class="dropdown">
      <span class="dropdown-title">
        <el-avatar
          size="large"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        ></el-avatar>
        <span class="title">admin</span>
        <el-icon class="dropdown-icon"><arrow-down-bold /></el-icon
      ></span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </el-space>
  </el-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import variables from '@/style/index.module.scss'
export default defineComponent({
  setup () {
    console.log(variables)
    return {}
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: $herder-height;
  // line-height: $herder-height;
  background-color: $primary-btn-color;
.space{
  float: right;
  display: flex;
  height: 100%;
  .dropdown{
    .dropdown-title{
      // height: $herder-height;
      @include flex-item-center;
    }
    .title,.dropdown-icon{
      margin-left: 8px;
    }
  }
}
}
</style>
