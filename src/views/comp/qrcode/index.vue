<template>
  <div><abc :i="[1,2,3,4,5]"></abc>二维码</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import abc from './abc.jsx'
export default defineComponent({
  components: {
    abc
  },
  setup () {
    return {}
  }
}
)
</script>

<style>

</style>
