<template>
  <el-main>
    <div v-for="item in sortedArray" :key="item.id">
      <el-row align="middle" justify="center">
        <el-col>
          <div :key="item.id" class="pokemon-number">{{ item.id }}</div>
        </el-col>
      </el-row>
      <el-row align="middle" justify="center">
        <el-col>
          <div :key="item.id" class="pokemon-name">{{ item.name.replace(/(\b[a-z](?!\s))/g, (c) => c.toUpperCase()) }}</div>
        </el-col>
      </el-row>
      <el-row align="middle" justify="start" class="stats-row" :gutter="30">
        <el-col :xs="24" :sm="12" :md="{span:10, offset: 2}" class="image-col">
            <img :src="item.sprites.other.dream_world.front_default"/>
            <div class="type-tag pokemon-name">
              <TypeTag :Types="item.types"/>
            </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" class="stats-section-col">
          <div class="standard-config">
            <GeneralStats :Stats="{Height: item.height, Weight: item.weight, BaseXP: item.base_experience}"/>
          </div>
          <h2 class="section-label">Abilities</h2>
          <div class="standard-config">
            <AbilityStats :Ability="item.abilities"/>
          </div>
          <h2 class="section-label">Stats</h2>
          <div class="standard-config" style="margin-bottom: 0px;">
            <StatsValueDisplay  :statsData="item.stats" />
          </div>
        </el-col>
      </el-row>
      <el-row align="top">
        <el-col :xs="24" :sm="12" :md="{span:7, offset: 12}" class="stats-section-col">
          <div class="evolution-section">
            <h2 class="section-label">Evolution</h2>
            <Evolution :pokemonId="item.id"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script lang="ts">
//Dependencies
import { defineComponent } from 'vue'
import axios from 'axios'

//Components
import GeneralStats from './StatsComponent/GeneralStats.vue'
import AbilityStats from './StatsComponent/AbilityStats.vue'
import StatsValueDisplay from './StatsComponent/StatsValueDisplay.vue'
import Evolution from './StatsComponent/EvolutionComponent.vue'
import TypeTag from './StatsComponent/TypeTag.vue'
import { PokemonArray } from '../services/ApiRequest'

//Data import
// import { PokemonArray } from '../services/ApiRequest'

export default defineComponent({
  data() {
    return {
      Pokemon: [] as any,
    }
  },

  computed: {
    sortedArray():any {
      return this.Pokemon.sort((a:any, b:any) => a.id - b.id);
    },
  },

  components: {
    GeneralStats,
    AbilityStats,
    StatsValueDisplay,
    Evolution,
    TypeTag
  },

  methods: {
    async getData() {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokedex/2");
      data.pokemon_entries.map(async (pokemon:any) => {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.entry_number)
        this.Pokemon.push(data);
      });
    }
  },

  mounted() {
    console.log(PokemonArray)
    this.getData();
  }
})
</script>

<style scoped>
h2 {
  font-family: "Montserrat", sans-serif;
}
.el-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemon-name {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: #525252;
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
}

.pokemon-number {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  color: #626262;
  font-weight: 300;
  padding-top: 20px;
  padding-bottom: 20px;
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
}

.stats-row {
  padding-top: 50px;
  padding-bottom: 25px;
}

.stats-section-col {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
}

.type-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #525252;
  margin-bottom: 20px;
}

.section-label {
  color: #525252;
  margin-bottom: 9px;
}

.standard-config {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 15px;
}

.image-col {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.image-col > img {
  width: 267px;
  height: 267px;
}

.evolution-section {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 5px;
}

@media (max-width: 960px) {
  .stats-section-col, .evolution-section {
    align-items: center;
    justify-content: center;
  }
}
</style>