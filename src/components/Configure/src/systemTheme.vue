<template>
    <el-divider>
      <span class="fs16">{{title}}</span>
    </el-divider>
    <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    return {

    }
  }
})
</script>
