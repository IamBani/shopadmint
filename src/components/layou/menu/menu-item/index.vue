<template>
   <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <!-- <el-menu-item index="4" v-for="item in items" :key="item"> -->
      <el-icon><setting /></el-icon>
      <!-- <template #title>{{item.meta?.title}}</template> -->
    <!-- </el-menu-item> -->
</template>

<script lang="ts">
import { Menu } from '@/router/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    // items: {
    //   type: Object as PropType<Menu>,
    //   default: () => ({}),
    //   required: true
    // }
  },
  setup () {
    return {

    }
  }
})
</script>

<style>

</style>
