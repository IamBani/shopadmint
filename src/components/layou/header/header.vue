<template>
  <el-header class="header">
    <el-row class="row">
      <el-col :span="12" class="left-panel">
        <hamburger></hamburger>
        <Breadcrumbs class="bread"></Breadcrumbs>
      </el-col>
      <el-col :span="12">
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
      </el-col>
    </el-row>
  </el-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import variables from '@/style/index.module.scss'
import hamburger from '../hamburger/hamburger.vue'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.vue'
export default defineComponent({
  components: {
    hamburger,
    Breadcrumbs
  },
  setup () {
    console.log(variables)
    return {}
  }
})
</script>

<style lang="scss" scoped>
.header {
  @include flex-item-center;
  // justify-content: space-between;
  height: $herder-height;
  // line-height: $herder-height;
  background-color: $primary-btn-color;
  width: 100%;
  .row {
    width: 100%;
    .left-panel {
      @include flex-item-center;
      .bread {
        margin-left: 15px;
      }
    }
    .space {
      float: right;
      display: flex;
      height: 100%;
      .dropdown {
        .dropdown-title {
          // height: $herder-height;
          @include flex-item-center;
        }
        .title,
        .dropdown-icon {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
