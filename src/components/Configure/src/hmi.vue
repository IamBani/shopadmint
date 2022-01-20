<template>
  <div class="flex">
    <div class="flex justify-between align-center block">
      <span>分割菜单</span>
      <el-switch v-model="features.splitMeun" inline-prompt active-text="开" inactive-text="关">
      </el-switch>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const features = reactive({
      splitMeun: false
    })
    return {
      features
    }
  }
})
</script>

<style lang="scss" scoped>
.block{
  width: 100%;
}
</style>
