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
  >
    <div>
    <el-divider>
      <span class="fs16">主题</span>
    </el-divider>
     <!-- <el-switch
      v-model="value2"
      class="mt-2"
      inline-prompt
      :active-icon="Check"
      :inactive-icon="Close"
    /> -->
    </div>
  </el-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
