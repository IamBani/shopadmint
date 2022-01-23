<template>
  <div class="flex justify-between align-center block mt">
    <span>{{ title }}</span>
    <el-select
      class="select"
      @change="handleChange"
      :model-value="def"
      :disabled="disabled"
      placeholder="Select"
      size="small"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.value"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface choose{
  value:string
}
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    def: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array as PropType<choose[]>,
      default: () => ([])
    }
  },
  setup() {
    const handleChange = (e) => {
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
.select{
  width: 126px;
}</style>
