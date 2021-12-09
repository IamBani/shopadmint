<template>
  <el-main>
   <div @click="a">
    <el-button type="primary">main</el-button>
   </div>
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup () {
    const a = () => {
      ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success'
      })
    }
    return {
      a
    }
  }
})
</script>

<style>

</style>
