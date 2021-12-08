<template>
 <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
         <el-icon><setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </el-header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return {}
  }
})
</script>
