<template>
  <div v-for="(item, index) in formatedData" :key="index" class="main-frame">
    <div
      :key="index"
      class="type-tag"
      :style="{background: item.type.color}"
    >{{item.type.name.replace(/(\b[a-z](?!\s))/g, (c) => c.toUpperCase())}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type TypeColor = {
  colorName: string;
  hex: string;
}

export default defineComponent({
  data() {
    return {
      TypeColors: [
        { colorName: "normal", hex: '#A8A77A' },
        { colorName: "fire", hex: '#EE8130' },
        { colorName: "water", hex: '#6390F0' },
        { colorName: "electric", hex: '#F7D02C' },
        { colorName: "grass", hex: '#7AC74C' },
        { colorName: "fighting", hex: '#C22E28' },
        { colorName: "poison", hex: '#A33EA1' },
        { colorName: "ground", hex: '#E2BF65' },
        { colorName: "flying", hex: '#A98FF3' },
        { colorName: "psychic", hex: '#F95587' },
        { colorName: "bug", hex: '#A6B91A' },
        { colorName: "rock", hex: '#B6A136' },
        { colorName: "ghost", hex: '#735797' },
        { colorName: "dragon", hex: '#6F35FC' },
        { colorName: "dark", hex: '#705746' },
        { colorName: "steel", hex: '#B7B7CE' },
        { colorName: "fairy", hex: '#D685AD' }
      ] as TypeColor[],
    }
  },

  props: {
    Types: Array as any,
  },

  computed: {
    formatedData(): any {
      this.Types.map((item: any) => {
        this.TypeColors.find(resp => {
          if (item.type.name == resp.colorName) {
            item.type = { ...item.type, color: resp.hex }
          }
        });
      })
      return this.Types;
    }
  },
})
</script>

<style lang="scss" scoped>
.main-frame {
  display: flex;
  align-items: center;
  justify-content: center;
}
.type-tag {
  width: 80px;
  height: 30px;
  font-size: 16px;
  margin: 10px 0px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #f1f5f8;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  text-shadow: none;
}
</style>