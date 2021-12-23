<template>
  <div class="logo-container">
     <el-avatar shape="square" :size="45" fit="contain" :src="logo"></el-avatar>
     <span v-if="!isShow" class="logo-title">Vue Element Admin</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import logo from '@/assets/image/logo.png'
import { useStore } from '@/store/index'
export default defineComponent({
  setup () {
    const store = useStore()
    const isShow = computed(() => {
      return store.getters['setting/tenfold']
    })
    return {
      logo,
      isShow
    }
  }
})
</script>

<style lang="scss" scoped>
.logo-container{
  @include flex;
  justify-content: center;
  align-items: center;
  height:$herder-height;
  line-height:$herder-height;
  .logo-title{
    margin-left:10px;
    white-space: nowrap;
    flex-wrap: 600;
  }
  ::v-deep .el-avatar {
    background: none;
  }
}
</style>
