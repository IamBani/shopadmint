<template>
   <el-aside width="260px" class="aside-container">
     <logo></logo>
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
import logo from '../logo/logo.vue'
import { defineComponent, getCurrentInstance, ComponentInternalInstance } from 'vue'
export default defineComponent({
  components: {
    logo
  },
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

<style lang="scss" scoped>
.aside-container{
  box-shadow: 1px 0px 4px rgb(0 21 41 / 8%);
  height: 100%;
  background-color:$primary-btn-color;
  z-index: 10;
  }
</style>
