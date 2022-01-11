<template>
    <el-dropdown @command="command">
    <svg-icon icon-name="language" icon-class="icon-size"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in localeList" :command="item.command" :key="item.command">{{item.text}}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { localeList } from './hook/localeSetting'
import { changeLocale } from '@/locales/useLocale'
export default defineComponent({
  setup () {
    const command = async (v) => {
      console.log(v)
      await changeLocale(v as LocaleType)
    }
    return {
      command,
      localeList
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-size{
  font-size: 16px;
}
</style>
