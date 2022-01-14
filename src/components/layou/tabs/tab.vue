<template>
  <el-space>
   <el-button @click="changeRoute(item.path)" :type="item.path ===pathname?'primary':'default'" v-for="item in tabs" :key="item.path">{{$t(item.title||'')}}</el-button>
  </el-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { tabs as tab } from './type'
export default defineComponent({
  setup () {
    const { t } = useI18n()
    const tabs = ref<tab[]>([])
    const pathname = ref('')
    const { currentRoute, push, getRoutes } = useRouter()
    watch([() => unref(currentRoute)], ([path]) => {
      console.log(path)
      if (!path.meta.hideTab && !tabs.value.find(item => item?.path === path.path)) {
        tabs.value.push({
          path: path.path,
          title: path?.meta?.title as string
        })
        pathname.value = path.path
      }
    }, { immediate: true })
    const changeRoute = (path) => {
      pathname.value = path
      push(path)
    }
    return {
      tabs,
      pathname,
      changeRoute
    }
  }
})
</script>

<style>

</style>
