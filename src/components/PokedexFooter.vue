<template>
  <el-footer height="120px" class="footer-frame">
    <span class="made-by">
      Made by
      <el-link href="https://github.com/jpbraganca" type="danger" ta>@jpbraganca</el-link>
    </span>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
$color_1: #525252;
$color_2: #323232;
$font-family_1: "Montserrat", sans-serif;

.footer-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
}
.made-by {
  font-family: $font-family_1;
  font-size: 16px;
  font-weight: 500;
  color: $color_1;
  > a {
    text-decoration: none;
    color: $color_2;
  }
}
</style>