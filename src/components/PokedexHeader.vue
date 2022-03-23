<template>
  <el-header height="120px">
    <el-row>
      <el-col class="header-col">
        <Icon icon="mdi:menu" color="#626262" width="30px" height="30px" />
        <Icon icon="mdi:pokemon-go" color="#626262" width="48px" height="48px" style="text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);"/>
        <Icon icon="mdi:magnify" color="#626262" width="30px" height="30px" />
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  components: {
    Icon,
  }

})
</script>

<style lang="scss" scoped>

.header-col {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding:40px;
}
</style>