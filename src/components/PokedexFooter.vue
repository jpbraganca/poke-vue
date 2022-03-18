<template>
  <el-footer height="120px" class="footer-frame">
    <span class="made-by">Made by <el-link href="https://github.com/jpbraganca" type="danger" ta>@jpbraganca</el-link></span>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>
.footer-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
}

.made-by {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #525252;
}

.made-by > a {
  text-decoration: none;
  color: #323232
}
</style>