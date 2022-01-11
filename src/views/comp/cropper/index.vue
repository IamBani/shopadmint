<template>
  <div>
    图片插件
    {{$t('common.okText')}}
     <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
     </el-date-picker>
     {{t('routes.dynamicSidebar.comp.comp')}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup () {
    const { t } = useI18n()
    const value1 = ref('')
    return {
      value1,
      t
    }
  }
})
</script>

<style>

</style>
