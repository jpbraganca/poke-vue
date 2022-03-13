<template>
  <div class="main-frame">
    <span class="ability-display">Torrent</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>
.ability-display {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #525252;
}

.main-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 40px;
  background: #f1f5f8;
  border: 1.5px solid rgba(51, 145, 255, 0.6);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 12px;
}
</style>