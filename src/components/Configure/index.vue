<template>
  <div class="setting flex">
    <div class="setting-btn" @click="drawer = !drawer">
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
      <el-scrollbar class="">
        <div class="box">
        <themeTitle></themeTitle>
        <navigation></navigation>
        <SystemTheme title="系统主题">
          <groupColor
            v-model="def"
            :groupColor="SystemList"
          ></groupColor>
        </SystemTheme>
        <SystemTheme title="顶栏主题">
          <groupColor
            v-model="topDef"
            :groupColor="topList"
          ></groupColor>
        </SystemTheme>
        <SystemTheme title="菜单主题">
          <groupColor
            v-model="menuDef"
            :groupColor="menuList"
          ></groupColor>
        </SystemTheme>
         <SystemTheme title="界面功能">
           <hmi title="分割菜单"></hmi>
           <hmi title="固定展开菜单"></hmi>
           <hmi title="切换页面关闭菜单"></hmi>
           <hmi title="折叠菜单"></hmi>
           <hmi title="侧边菜单拖拽"></hmi>
           <hmi title="菜单搜索"></hmi>
           <hmi title="侧边菜单手风琴模式"></hmi>
           <hmi title="折叠菜单显示名称"></hmi>
           <hmi title="固定header"></hmi>
           <hmi title="固定Sidebar"></hmi>
        </SystemTheme>
        </div>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue'
import theme from './src/theme.vue'
import navigation from './src/navigation.vue'
import SystemTheme from './src/systemTheme.vue'
import groupColor, { colors } from './src/groupColor.vue'
import hmi from './src/hmi.vue'
export default defineComponent({
  components: {
    themeTitle: theme,
    navigation,
    SystemTheme,
    groupColor,
    hmi
  },
  setup() {
    const drawer = ref(false)
    const def = ref('#0960BD')
    const SystemList = ref<colors[]>([
      {
        color: '#0960BD'
      },
      {
        color: '#0084F4'
      },
      {
        color: '#009688'
      },
      {
        color: '#536DFE'
      },
      {
        color: '#FF5C93'
      },
      {
        color: '#EE4F12'
      },
      {
        color: '#0096C7'
      },
      {
        color: '#9C27B0'
      },
      {
        color: '#FF9800'
      }
    ])
    const topDef = ref('#ffffff')
    const topList = ref<colors[]>([
      {
        color: '#ffffff'
      },
      {
        color: '#151515'
      },
      {
        color: '#009688'
      },
      {
        color: '#5172DC'
      },
      {
        color: '#018FFB'
      },
      {
        color: '#409EFF'
      },
      {
        color: '#E74C3C'
      },
      {
        color: '#24292E'
      },
      {
        color: '#394664'
      }
    ])

    const menuDef = ref('#001529')
    const menuList = ref<colors[]>([
      {
        color: '#001529'
      },
      {
        color: '#212121'
      },
      {
        color: '#273352'
      },
      {
        color: '#000000'
      },
      {
        color: '#191B24'
      },
      {
        color: '#191A23'
      },
      {
        color: '#304156'
      },
      {
        color: '#001628'
      },
      {
        color: '#28333E'
      }
    ])

    return {
      drawer,
      SystemList,
      def,
      topDef,
      topList,
      menuDef,
      menuList
    }
  }
})
</script>

<style lang="scss" scoped>
.setting {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  &-btn {
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
    &-icon {
    }
  }
}
.drawer {
  ::v-deep .el-drawer__body {
    border-top: 1px solid var(--el-border-color-base);
    padding: 0;
  }
  .box{
    padding: var(--el-drawer-padding-primary);
  }
}
</style>
