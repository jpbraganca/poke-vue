<template>
  <div class="stats-wrapper" v-for="(item, index) in formatedData" :key="index">
    <div class="stats-label" :style="{background: item.stat.color}">
      <span style="">{{ item.stat.abreviation }}</span>
    </div>
    <div class="stats-value">
      <span style="">{{item.base_stat}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type statsDataTypes = {
  name: string;
  abreviation: string;
  bgColor: string;
}

export default defineComponent({
  data() {
    return {
      statsDataConfig: [
        { name: "hp", abreviation: "HP", bgColor: "#DF2140" },
        { name: "attack", abreviation: "ATK", bgColor: "#FF994D" },
        { name: "defense", abreviation: "DEF", bgColor: "#FEDC61" },
        { name: "special-attack", abreviation: "SpA", bgColor: "#85DDFF" },
        { name: "special-defense", abreviation: "SpD", bgColor: "#A8F083" },
        { name: "speed", abreviation: "SPD", bgColor: "#FB94A8" }
      ] as statsDataTypes[]
    }
  },
  props: {
    statsData: Array as any,
  },
  computed: {
    formatedData(): any {
      this.statsData.map((item:any) => {
        this.statsDataConfig.find(resp => {
          if (item.stat.name == resp.name) {
            item.stat = { ...item.stat, abreviation: resp.abreviation, color: resp.bgColor }
          }
        })
      })
      return this.statsData;
    }
  }

})
</script>

<style scoped>
.stats-label {
  height: 50%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background: #df2140;
  color: #F1F5F8;
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
  margin-right: 32px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}

.stats-value {
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #525252;
}
</style>