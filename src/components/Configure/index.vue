<template>
  <div class="setting flex">
     <div class="setting-btn" @click="drawer=!drawer">
          <el-icon :size="26" class="setting-btn-icon">
            <Setting />
          </el-icon>
     </div>
  </div>
  <div class="drawer">
  <el-drawer
    custom-class="drawer-top"
    v-model="drawer"
    :append-to-body="false"
    title="项目配置"
    size="330"
  >
    <div>
      <themeTitle></themeTitle>
      <navigation></navigation>
      <SystemTheme title="系统主题">
        <groupColor></groupColor>
      </SystemTheme>
    </div>
  </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import theme from './src/theme.vue'
import navigation from './src/navigation.vue'
import SystemTheme from './src/systemTheme.vue'
import groupColor from './src/groupColor.vue'
export default defineComponent({
  components: {
    themeTitle: theme,
    navigation,
    SystemTheme,
    groupColor
  },
  setup() {
    const drawer = ref(false)
    return {
      drawer
    }
  }
})
</script>

<style lang="scss" scoped>
.setting{

  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  &-btn{
    background-color: var(--el-color-primary);
    color: #fff;
    border-radius: 5px 0 0 5px;
    line-height: 40px;
    font-size: 22px;
    width: 40px;
    height: 40px;
    @include flex-item-center;
    justify-content: center;
    cursor: pointer;
    &-icon{
    }
  }
}
.drawer{
 ::v-deep .el-drawer__body{
    border-top: 1px solid var(--el-border-color-base);
  }
}
</style>
