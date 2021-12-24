<template>
   <el-aside :width="width" class="aside-container">
    <el-scrollbar height="100%">
     <logo></logo>
     <imenu></imenu>
     </el-scrollbar>
   </el-aside>
</template>

<script lang="ts">
import logo from '../logo/logo.vue'
import { defineComponent, getCurrentInstance, ComponentInternalInstance, computed } from 'vue'
import menu from '../menu/index.vue'
import { useStore } from '@/store/index'
import { asyncRoutes } from '@/router'
export default defineComponent({
  components: {
    logo,
    imenu: menu
  },
  setup () {
    const store = useStore()

    const width = computed(() => {
      return store.getters['setting/asideWidth']
    })

    return {
      width,
      asyncRoutes
    }
  }
})
</script>

<style lang="scss" scoped>
.aside-container{
  box-shadow: 1px 0px 4px rgb(0 21 41 / 8%);
  height: 100%;
  background-color:$primary-btn-color;
  z-index: 10;
  transition: width 0.2s;
  .el-menu-vertical-demo{
    border-right:none;
  }
  }

</style>
