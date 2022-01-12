<template>
    <el-tabs
    type="card"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const editableTabs = ref([
      {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      },
      {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }
    ])
    const removeTab = (targetName: string) => {
      console.log(targetName)
    }
    return { editableTabs, removeTab }
  }
})
</script>

<style>

</style>
