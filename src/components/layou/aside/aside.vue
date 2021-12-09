<template>
   <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
     <el-menu :default-openeds="['1', '3']">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><edit /></el-icon>Navigator One
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="1-1">Option 1</el-menu-item>
            <el-menu-item index="1-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
   </el-aside>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ComponentInternalInstance } from 'vue'
export default defineComponent({
  setup () {
    const current = getCurrentInstance() as ComponentInternalInstance
    console.log(current)
    const { $message } = current.appContext.config.globalProperties
    $message({
      message: 'Congrats, this is a success message.',
      type: 'success'
    })
    return {}
  }
})
</script>

<style>

</style>
