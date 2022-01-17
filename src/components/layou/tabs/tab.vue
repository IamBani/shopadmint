<template>

    <el-space>
      <div v-for="(item, index) in tabs" :key="item.path">
        <el-button
          @contextmenu.prevent="operate(index, $event)"
          @mouseenter="enter(index)"
          @mouseleave="leave"
          class="tab"
          :class="item.path === pathname ? 'action' : ''"
          :type="item.path === pathname ? 'primary' : 'default'"
          plain
          @click="changeRoute(item.path)"
        >
          {{ $t(item.title || "") }}
          <transition name="el-fade-in">
            <el-icon
              v-show="i === index"
              @click="close(index)"
              class="el-icon--right"
              ><close
            /></el-icon>
          </transition>
        </el-button>
      </div>
    </el-space>
  <el-tooltip
      ref="tooltipRef"
      v-model:visible="visible"
      placement="bottom"
      :popper-options="{
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              adaptive: false,
              enabled: false,
            },
          },
        ],
      }"
      :virtual-ref="buttonRef"
      virtual-triggering
      trigger="manual"
      effect="light"
      popper-class="singleton-tooltip"
    >
      <template #content>
        <el-space direction="vertical" alignment="flex-start" class="popup">
        <el-link :underline="false">
         <el-icon :size="18"><refresh /></el-icon> 重新加载
        </el-link>
        <el-link :underline="false">
          <el-icon :size="18"><close /></el-icon>关闭标签页</el-link>
        <el-link :underline="false">
          <el-icon :size="18"><d-arrow-left /></el-icon>关闭左侧标签页</el-link>
        <el-link :underline="false">
          <el-icon :size="18"><d-arrow-right /></el-icon>关闭右侧标签页</el-link>
        <el-link :underline="false">
          <el-icon :size="18"><present /></el-icon>关闭其他标签页</el-link>
        <el-link :underline="false">
          <el-icon :size="18"><minus /></el-icon>关闭全部标签页</el-link>
      </el-space>
      </template>
    </el-tooltip>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, unref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { tabs as tab } from './type'
export default defineComponent({
  setup() {
    const i = ref(-1)
    const visible = ref(false)
    const buttonRef = ref()
    const tooltipRef = ref()

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
            title: path?.meta?.title as string
          })
        }
        pathname.value = path.path
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
    const operate = (index: number, e: Event) => {
      buttonRef.value = e.target
      visible.value = true
    }
    onMounted(() => {
      document.addEventListener('click', () => {
        visible.value = false
      })
    })
    return {
      tabs,
      pathname,
      changeRoute,
      enter,
      leave,
      i,
      close,
      operate,
      visible,
      buttonRef,
      tooltipRef
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
}
.singleton-tooltip {
  .popup {
    font-size: 14px;
    ::v-deep .el-space__item {
      padding: 0 12px;
      color: #000000d9;
      font-weight: 400;
      line-height: 22px;
      cursor: pointer;
      .el-link--inner{
        display: flex;
        align-items: center;
        .el-icon{
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
