<template>
    <el-dropdown @command="command">
    <svg-icon icon-name="language" icon-class="icon-size"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh-cn">简体中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const command = (v) => {
      console.log(v)
    }
    return {
      command
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-size{
  font-size: 16px;
}
</style>
