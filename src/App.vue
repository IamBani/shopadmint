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
import { useStore } from './store'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup () {
    const store = useStore()
    // const { t } = useI18n()
    const { t } = useI18n()
    console.log(t)
    // const locale = t('zh-CN')
    // console.log(locale)
    return {
      locale: en
    }
  }
})
</script>

<style lang="scss">

</style>
