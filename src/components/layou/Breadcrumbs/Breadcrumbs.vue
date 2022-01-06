<template>
  <el-breadcrumb separator="/" class="breadcrumb">
  <template v-for="(item,index) in breadcrumbData" :key="item.path">
    <el-breadcrumb-item class="no-redirect" v-if="breadcrumbData.length-1 === index">{{item.meta?.title}}</el-breadcrumb-item>
    <el-breadcrumb-item v-else class="redirect" :to="item.path"> {{item.meta?.title}}</el-breadcrumb-item>
  </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, watch, unref, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const breadcrumbData = ref([]) as any
    const { currentRoute } = useRouter()
    watch([() => unref(currentRoute).path], () => {
      breadcrumbData.value.length = 0
      if (currentRoute.value?.meta?.single) {
        breadcrumbData.value.push(currentRoute.value)
      } else {
        breadcrumbData.value = currentRoute.value.matched
      }
    }, {
      immediate: true
    })
    return {
      breadcrumbData
    }
  }
})
</script>

<style scoped lang="scss">
.breadcrumb{
  .no-redirect{

  }
  .redirect{
    cursor: pointer;
  }
}
</style>
