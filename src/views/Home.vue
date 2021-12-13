<template>
  <div class="home">
    <div @click="abc">测试</div>
    <div>{{testa}}</div>
    <div>{{testModuleName}}</div>
     <el-icon><setting /></el-icon>
  </div>
</template>

<script lang="ts">
import { test } from '@/axios/http/home'
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store/index'
export default defineComponent({
  name: 'Home',
  components: {

  },
  setup () {
    const store = useStore()
    const abc = () => {
      test().then(res => {
        console.log(res)
      })
    }
    console.log(store.state.login.token)
    const testModuleName = computed(() => store.state.user.username)
    const testa = computed(() => store.state.login.token)
    return {
      abc,
      testModuleName,
      testa
    }
  }
})
</script>
