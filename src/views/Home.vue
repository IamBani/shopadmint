<template>
  <div class="home">
    <div>测试</div>
    <div>{{a}}</div>
     <el-icon><setting /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {

  },
  setup () {
    const a = ref(0)
    return {
      a
    }
  }
})
</script>
