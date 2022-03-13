<template>
  <div class="stats-wrapper">
    <div class="stats-label">
      <span style="color: #F1F5F8;">HP</span>
    </div>
    <div class="stats-value">
      <span style="color: #525252;">122</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>
.stats-label {
  height: 50%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background: #df2140;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-wrapper {
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
  width: 54px;
  font-size: 22px;
  background: #f1f5f8;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-top: 8px;
  margin-right: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.10);
}

.stats-value {
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>