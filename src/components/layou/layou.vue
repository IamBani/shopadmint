<template>
  <el-container>
    <saside></saside>
    <el-container>
      <shead></shead>
      <smain></smain>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import saside from '@/components/layou/aside/aside.vue'
import shead from '@/components/layou/header/header.vue'
import smain from '@/components/layou/main/main.vue'
export default defineComponent({
  components: {
    saside,
    shead,
    smain
  },
  setup () {
    return {}
  }
})
</script>

<style>

</style>
