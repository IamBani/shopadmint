<template>
  <div class="theme">
    <el-divider>
      <span class="fs16">主题</span>
    </el-divider>
    <div class="mt-2">
      <el-switch
        v-model="value2"
        size="large"
        active-color="#151515"
        inactive-color="#151515"
        inline-prompt
        :active-icon="sun"
        :inactive-icon="moon"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, resolveComponent, h } from 'vue'
export default defineComponent({
  name: 'theme',
  setup() {
    const value2 = ref(false)
    const svg = 'svg-icon'
    const sun = h(resolveComponent(svg), { iconName: 'sun', class: 'sun' })
    const moon = h(resolveComponent(svg), { iconName: 'moon', class: 'sun' })
    return {
      svg,
      sun,
      moon,
      value2
    }
  }
})
</script>

<style lang="scss" scoped>
.theme {
  .mt-2 {
    text-align: center;
    ::v-deep .sun {
      color: #f9c626;
    }
  }
}
</style>
