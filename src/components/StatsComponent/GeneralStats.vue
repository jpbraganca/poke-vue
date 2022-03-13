<template>
  <div class="main-div" v-for="(item, name) in Stats" :key="name">
    {{ name }}
    <div class="height-box">{{ item }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    Stats: Object,
  }

})
</script>

<style scoped>
.main-div {
  display: flex;
  flex-direction: column;
  color: #525252;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-right: 12px;
}

.height-box {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  font-size: 16px;
  background: #f1f5f8;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
}
</style>