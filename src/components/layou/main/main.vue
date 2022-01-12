<template>
  <el-scrollbar>
  <el-main>
   <router-view></router-view>
  </el-main>
  </el-scrollbar>
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
