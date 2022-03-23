<template>
  <div class="main-frame" v-for="(item, index) in Ability" :key="index">
    <span
      class="ability-display"
    >{{item.ability.name.replace(/(\b[a-z](?!\s))/g, (c) => c.toUpperCase())}}</span>
    <Icon v-if="item.is_hidden === true" icon="clarity:eye-hide-solid" width="18px" height="18px" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue';

export default defineComponent({
  components: {
    Icon
  },
  props: {
    Ability: Array,
  }

})
</script>

<style lang="scss" scoped>
.ability-display {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #525252;
}

.main-frame {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 50px;
  background: #f1f5f8;
  border: 1.5px solid rgba(51, 145, 255, 0.6);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 12px;
}

.ability-display > Icon {
  margin-left: 5px;
}
</style>