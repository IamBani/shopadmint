<template>
    <el-sub-menu v-if="item.children && item.children?.length>0" :index="item.path" class="sub-menu">
       <template #title>
          <component v-if="item.meta.svg" :is="svg" :icon-name="item.meta.svg" class="svg-icon"></component>
          <el-icon v-else>
            <component :is="item.meta.icon"></component>
          </el-icon>
         <span>{{title}}</span>
       </template>
       <template v-for="i in item.children" :key="i.path">
         <SimpleSubMenu :item="i"></SimpleSubMenu>
        </template>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" class="sub-menu-item">
       <component class="svg-icon" v-if="item.meta.svg" :is="svg" :icon-name="item.meta.svg" ></component>
          <el-icon v-else>
            <component :is="item.meta.icon"></component>
        </el-icon>
      <template #title>{{title}}</template>
    </el-menu-item>
</template>

<script lang="ts">
import { AppRoute } from '@/router/types'
import { computed, defineComponent, PropType, toRefs } from 'vue'

export default defineComponent({
  name: 'el-sub-menu',
  props: {
    item: {
      type: Object as PropType<AppRoute>,
      default: () => ({})
    }
  },
  setup (props) {
    const svg = 'svg-icon'
    const { item } = toRefs(props)
    const title = computed(() => {
      return item.value?.meta?.title
    })
    return {
      title,
      svg
    }
  }
})
</script>

<style lang="scss" scoped>
.sub-menu,.sub-menu-item{
  .svg-icon{
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
