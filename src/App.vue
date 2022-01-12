<template>
  <div id="nav">
     <el-config-provider :locale="locale">
       <router-view/>
     </el-config-provider>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from './store'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup () {
    const store = useStore()
    const { getLocaleMessage } = useI18n()
    const locale = computed(() => {
      return getLocaleMessage(store.getters['language/getlange']).locales
    })
    return {
      locale
    }
  }
})
</script>

<style lang="scss">

</style>
