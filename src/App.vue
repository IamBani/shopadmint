<template>
  <div id="nav">
     <el-config-provider :locale="locale">
       <router-view/>
     </el-config-provider>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
export default defineComponent({
  setup () {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="scss">

</style>
