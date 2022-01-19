<template>
  <el-divider>
    <span class="fs16">导航栏模式</span>
  </el-divider>
  <el-space wrap>
    <el-tooltip
      v-for="item in navigationList"
      :key="item.content"
      class="box-item"
      effect="dark"
      :content="item.content"
      placement="bottom"
    >
      <div class="setting-navigation" :class="item.class">
        <div class="setting-navigation-content" v-if="item.isContent"></div>
      </div>
    </el-tooltip>
  </el-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
interface list {
  content: string;
  class: string;
  isContent?: boolean;
}
export default defineComponent({
  setup() {
    const navigationList = ref<list[]>([
      {
        content: '左侧菜单模式',
        class: 'left-menu-item'
      },
      {
        content: '顶部菜单混合模式',
        class: 'top-menu-mix-item'
      },
      {
        content: '顶部菜单模式',
        class: 'top-menu-item'
      },
      {
        content: '左侧菜单混合模式',
        class: 'left-menu-mix-item',
        isContent: true
      }
    ])
    return {
      navigationList
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin before($bc: #273352) {
  top: 0;
  left: 0;
  width: 33%;
  height: 100%;
  background-color: $bc;
  border-radius: 4px 0 0 4px;
}
@mixin after($bc: #fff) {
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background-color: $bc;
  border-radius: 0;
}
.setting-navigation {
  position: relative;
  width: 56px;
  height: 48px;
  margin-right: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: #f0f2f5;
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);
  &::before,
  &::after {
    position: absolute;
    content: "";
  }
  &.left-menu-item {
    &::before {
      @include before;
      z-index: 1;
    }
    &::after {
      @include after;
    }
  }
  &.top-menu-mix-item {
    &::before {
      @include before(#fff);
    }
    &::after {
      @include after(#273352);
      z-index: 1;
    }
  }
  &.top-menu-item {
    &::after {
      @include after(#273352);
    }
  }
  &.left-menu-mix-item {
    &::after {
      @include after();
    }
    &::before {
      @include before();
      z-index: 1;
    }
    .setting-navigation-content {
      position: absolute;
      left: 33%;
      top: 25%;
      height: calc(100% - 25%);
      width: 15%;
      background-color: #fff;
    }
  }
}
</style>
