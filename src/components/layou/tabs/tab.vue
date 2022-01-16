<template>
  <el-space>
    <div v-for="(item, index) in tabs" :key="item.path">
      <el-popover
        v-model:visible="item.isvisible"
        trigger="manual"
        placement="bottom"
        :show-arrow="true"
      >
        <div class="">
          <span> 重新加载</span>
          <span> 关闭标签页 </span>
          <span> 关闭左侧标签页 </span>
          <span> 关闭右侧标签页 </span>
          <span> 关闭其他标签页 </span>
          <span> 关闭全部标签页 </span>
        </div>
        <template #reference>
          <el-button
            @contextmenu.prevent="operate(index)"
            @mouseenter="enter(index)"
            @mouseleave="leave"
            class="tab"
            :class="item.path === pathname ? 'action' : ''"
            :type="item.path === pathname ? 'primary' : 'default'"
            plain
            @click="changeRoute(item.path)"
          >
            {{ $t(item.title || '') }}
            <transition name="el-fade-in">
              <el-icon
                v-show="i === index"
                @click="close(index)"
                class="el-icon--right"
                ><close
              /></el-icon>
            </transition>
          </el-button>
        </template>
      </el-popover>
    </div>
  </el-space>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { tabs as tab } from './type'
export default defineComponent({
  setup () {
    const i = ref(-1)
    const visible = ref(false)
    const tabs = ref<tab[]>([])
    const pathname = ref('')
    const { currentRoute, push } = useRouter()
    watch(
      [() => unref(currentRoute)],
      ([path]) => {
        console.log(path)
        if (
          !path.meta.hideTab &&
          !tabs.value.find((item) => item?.path === path.path)
        ) {
          tabs.value.push({
            path: path.path,
            title: path?.meta?.title as string,
            isvisible: false
          })
          pathname.value = path.path
        }
      },
      { immediate: true }
    )
    const changeRoute = (path) => {
      pathname.value = path
      push(path)
    }
    const enter = (index) => {
      i.value = index
    }
    const leave = () => {
      i.value = -1
    }
    const close = (index) => {
      tabs.value.splice(index, 1)
      console.log(tabs.value)
      if (tabs.value.length <= 0) {
        push('/')
      }
    }
    const operate = (index: number) => {
      console.log(index)
      tabs.value.forEach((item) => {
        item.isvisible = false
      })
      tabs.value[index].isvisible = true
    }
    return {
      tabs,
      pathname,
      changeRoute,
      enter,
      leave,
      i,
      close,
      operate,
      visible
    }
  }
})
</script>

<style lang="scss" scoped>
.tab {
  background-color: #fff;
  color: #303133;
  &:hover,
  &:focus {
    color: var(--el-color-primary);
    background-color: #fff;
  }
  &.action {
    color: var(--el-color-primary);
    border-color: var(--el-color-primary);
  }
  .el-icon--right {
    // transition: 2s display;
  }
}
</style>
