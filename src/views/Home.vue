<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>测试</div>
    <div>{{a}}</div>
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
