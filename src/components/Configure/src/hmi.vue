<template>
  <div class="flex">
    <div class="flex justify-between align-center block">
      <span>{{title}}</span>
      <el-switch @change="handleChange" :disabled="disabled"  :model-value="def" inline-prompt active-text="开" inactive-text="关">
      </el-switch>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    def: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    function handleChange(e) {
      console.log(e)
    }
    return {
      handleChange
    }
  }
})
</script>

<style lang="scss" scoped>
.block{
  width: 100%;
}
</style>
