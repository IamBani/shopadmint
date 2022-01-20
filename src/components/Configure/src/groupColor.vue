<template>
  <el-space>
    <template v-for="(item,index) in groupColor" :key="item.color">
      <span class="colors" @click="changeColor(item)" :style="{backgroundColor:item.color}">
        <el-icon class="icon" v-show="modelValue?modelValue===item.color:index===0"><check /></el-icon>
      </span>
    </template>
  </el-space>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, computed } from 'vue'
export interface colors {
  color: string;
}
export default defineComponent({
  props: {
    groupColor: {
      type: Array as PropType<colors[]>,
      default: () => ([])
    },
    modelValue: String
  },
  name: 'groupColor',
  setup(prop, { emit }) {
    const changeColor = (item:colors) => {
      emit('update:modelValue', item.color)
    }
    return {
      changeColor
    }
  }
})
</script>

<style lang="scss" scoped>
.colors{
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 2px;
    display:block;
    text-align: center;
    line-height: 20px;
    box-sizing: border-box;
    .icon{
      color: #fff;
    }
}
</style>
