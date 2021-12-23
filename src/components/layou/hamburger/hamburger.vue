<template>
  <div class="svgicon" @click="triggerSidebarOpened">
    <svg-icon :icon-name="icon" icon-class="icon-size"></svg-icon>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useOnMouseMove } from 'vue-composable'
import { useStore } from '@/store/index'

export default defineComponent({
  setup () {
    const store = useStore()
    const icon = computed(() => {
      return store.getters['setting/tenfold'] ? 'fold' : 'unfold'
    })
    const triggerSidebarOpened = () => {
      store.commit('setting/ADD_COUNT')
      // store.dispatch()
    }
    return {
      icon,
      triggerSidebarOpened
    }
  }
})
</script>

<style lang="scss" scoped>
.svgicon{
  cursor: pointer;
  .icon-size{
    font-size: 25px;
  }
}
</style>
