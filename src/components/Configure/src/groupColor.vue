<template>
  <el-space>
    <span class="colors">
      <el-icon><check /></el-icon>
    </span>
  </el-space>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue'
interface colors {
  color:string
}
export default defineComponent({
  props: {
    groupColor: {
      type: Object as PropType<colors>,
      defalue: '#fff'
    }
  },
  name: 'groupColor',
  setup() {
    return {

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
}
</style>
