<template>
  <el-menu
    router
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
   <template v-for="item in items" :key="item.path">
    <menu-item :item="item"></menu-item>
  </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import menuItem from './menu-item/SimpleSubMenu.vue'
import { AppRouteRecordRaw } from '@/router/types'
import { useStore } from '@/store/index'
import { asyncRoutes } from '@/router'
export default defineComponent({
  components: {
    menuItem
  },
  setup () {
    const items = asyncRoutes
    const store = useStore()
    const isCollapse = computed(() => {
      return store.getters['setting/tenfold']
    })
    return {
      isCollapse,
      items
    }
  }
})
</script>

<style>

</style>
