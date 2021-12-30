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
import { AppRoute, AppRouteRecordRaw } from '@/router/types'
import { defineComponent, computed } from 'vue'
import menuItem from './menu-item/SimpleSubMenu.vue'
import { useStore } from '@/store/index'
import router, { asyncRoutes } from '@/router'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    menuItem
  },
  setup () {
    const items = asyncRoutes
    const { getRoutes } = useRouter()
    console.log(getRoutes())
    const filterArray = getRoutes().filter(item => {
      return !item?.meta?.hideMenu
    })
    console.log(filterArray)

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
