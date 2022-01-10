<template>
  <div>
    图片插件
    {{$t('common.okText')}}
     <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
     </el-date-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const value1 = ref('')
    return {
      value1
    }
  }
})
</script>

<style>

</style>
