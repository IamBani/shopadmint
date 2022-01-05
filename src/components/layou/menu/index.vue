<template>
  <el-menu
    router
    :default-active="currentRoute.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
   <template v-for="item in items" :key="item.path">
    <sub-menu :item="item" :path="item.path"></sub-menu>
  </template>
  </el-menu>
</template>

<script lang="ts">
import { AppRoute, AppRouteRecordRaw } from '@/router/types'
import { defineComponent, computed } from 'vue'
// import menuItem from './menu-item/SimpleSubMenu.vue'
import { useStore } from '@/store/index'
import menuDataFilter, { useSplitMenu } from './hook/menuDataFilter'
import { useRouter } from 'vue-router'
import subMenu from './menu-item/subMenu'
export default defineComponent({
  components: {
    // menuItem,
    subMenu
  },
  setup () {
    const { currentRoute } = useRouter()
    const items = menuDataFilter()
    useSplitMenu()
    const store = useStore()
    const isCollapse = computed(() => {
      return store.getters['setting/tenfold']
    })
    return {
      isCollapse,
      items,
      currentRoute
    }
  }
})
</script>

<style>

</style>
