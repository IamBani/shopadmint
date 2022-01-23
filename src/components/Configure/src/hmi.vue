<template>
  <div class="flex mt">
    <div class="flex justify-between align-center block">
      <span>{{title}}</span>
      <slot><el-switch @change="handleChange" :disabled="disabled"  :model-value="def" inline-prompt active-text="开" inactive-text="关">
      </el-switch>
      </slot>
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
.mt{
  margin: 10px 0;
}
.block{
  width: 100%;
}
</style>
