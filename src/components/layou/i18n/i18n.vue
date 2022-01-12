<template>
    <el-dropdown @command="command">
    <svg-icon icon-name="language" icon-class="icon-size"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in localeList" :class="item.command===locale?'action':''"  :command="item.command" :key="item.command">{{item.text}}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { localeList } from './hook/localeSetting'
import { changeLocale } from '@/locales/useLocale'
import { useStore } from '@/store'
import language from '@/store/modules/language/language'

export default defineComponent({
  setup () {
    const store = useStore()
    const command = async (v) => {
      await changeLocale(v as LocaleType)
    }
    const locale = computed(() => store.getters['language/getlange'])
    return {
      command,
      localeList,
      locale
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-size{
  font-size: 16px;
}
.action{
  color:var(--el-color-primary);
  background-color: #fff;
}
</style>
