<template>
  <el-container class="container">
    <saside></saside>
    <el-container direction="vertical">
      <shead></shead>
      <smain></smain>
    </el-container>
  </el-container>
<configure></configure>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import saside from '@/components/layou/aside/aside.vue'
import shead from '@/components/layou/header/header.vue'
import smain from '@/components/layou/main/main.vue'
import configure from '@/components/Configure/index.vue'
export default defineComponent({
  components: {
    saside,
    shead,
    smain,
    configure
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.container{
  height:100vh;
  width:100vw;
  background-color: #f6f8f9;
}
</style>
