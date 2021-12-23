<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <!-- <menu-item></menu-item> -->
  </el-menu>
</template>

<script lang="ts">
import menuItem from './menu-item/index.vue'
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
export default defineComponent({
  components: {
    // menuItem
  },
  setup () {
    const store = useStore()
    const isCollapse = computed(() => {
      return store.getters['setting/tenfold']
    })
    return {
      isCollapse
    }
  }
})
</script>

<style>

</style>
