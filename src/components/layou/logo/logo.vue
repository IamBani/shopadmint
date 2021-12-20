<template>
  <div class="logo-container">
     <el-avatar shape="square" :size="45" fit="contain" :src="logo"></el-avatar>
     <span class="logo-title">Vue Element Admin</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/image/logo.png'
export default defineComponent({
  setup () {
    return {
      logo
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
  }
  ::v-deep .el-avatar {
    background: none;
  }
}
</style>
