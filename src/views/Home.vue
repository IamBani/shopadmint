<template>
  <div class="home">
    <div @click="abc">测试</div>
    <div>{{a}}</div>
     <el-icon><setting /></el-icon>
  </div>
</template>

<script lang="ts">
import { test } from '@/axios/http/home'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {

  },
  setup () {
    const abc = () => {
      test().then(res => {
        console.log(res)
      })
    }
    const a = ref(0)
    return {
      a,
      abc
    }
  }
})
</script>
