<template>
  <el-main>
    <el-carousel
      height="700px"
      arrow="always"
      direction="horizontal"
      :autoplay="false"
      indicator-position="none"
      v-if="this.Pokemon.length >= 151"
    >
      <el-carousel-item v-for="item in sortedArray" :key="item.id">
        <el-row align="middle" justify="center">
          <el-col>
            <div :key="item.id" class="pokemon-number">#{{ String(item.id).padStart(3, '0') }}</div>
          </el-col>
        </el-row>
        <el-row align="middle" justify="center">
          <el-col>
            <div
              :key="item.id"
              class="pokemon-name"
            >{{ item.name.replace(/(\b[a-z](?!\s))/g, (c) => c.toUpperCase()) }}</div>
          </el-col>
        </el-row>
        <el-row align="middle" justify="start" class="stats-row" :gutter="30">
          <el-col :xs="24" :sm="12" :md="{span:10, offset: 2}" class="image-col">
            <img :src="item.sprites.other.dream_world.front_default" />
            <div class="type-tag pokemon-name">
              <TypeTag :Types="item.types" />
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" class="stats-section-col">
            <div class="standard-config">
              <GeneralStats
                :Stats="{Height: item.height, Weight: item.weight, BaseXP: item.base_experience}"
              />
            </div>
            <h2 class="section-label">Abilities</h2>
            <div class="standard-config">
              <AbilityStats :Ability="item.abilities" />
            </div>
            <h2 class="section-label">Stats</h2>
            <div class="standard-config" style="margin-bottom: 0px;">
              <StatsValueDisplay :statsData="item.stats" />
            </div>
          </el-col>
        </el-row>
        <el-row align="top">
          <el-col :xs="24" :sm="12" :md="{span:7, offset: 12}" class="stats-section-col">
            <div class="evolution-section">
              <h2 class="section-label">Evolution</h2>
              <Evolution v-if="item.evolution" :Evolution="[...item.evolution]" />
            </div>
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
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

type EvolutionChain = {
  name: string;
  image: string;
  pokemonChainID: number;
}

export default defineComponent({
  data() {
    return {
      Pokemon: [] as any,
    }
  },

  computed: {
    sortedArray(): any {
      return this.Pokemon.sort((a: any, b: any) => a.id - b.id);
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
      data.pokemon_entries.map(async (pokemon: any) => {
        const pokemonResp = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.entry_number)
        const evolutionChainData = await this.handleEvolutionData(pokemonResp.data.id)

        this.Pokemon.push({ ...pokemonResp.data, evolution: evolutionChainData });
      });

      console.log(this.Pokemon)
    },

    async getEvolutionData(pokemonId: number) {

      const pokemonSpecies = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + pokemonId);
      const evolutionChain = await axios.get(pokemonSpecies.data.evolution_chain.url);

      return evolutionChain.data;
    },

    evolutionRecursiveSearch(data: any, evolutionChain: Array<EvolutionChain>) {
      if (data[0].evolves_to.length > 0) {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + data[0].species.name).then((resp) => {
          evolutionChain.push({ name: data[0].species.name, image: resp.data.sprites.other.dream_world.front_default, pokemonChainID: resp.data.id });
          this.evolutionRecursiveSearch(data[0].evolves_to, evolutionChain);
        })
      } else {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + data[0].species.name).then((resp) => {
          evolutionChain.push({ name: data[0].species.name, image: resp.data.sprites.other.dream_world.front_default, pokemonChainID: resp.data.id });
        })
      }
      return evolutionChain;
    },

    async handleEvolutionData(pokemonId: number) {
      const evolutionData = await this.getEvolutionData(pokemonId);
      const evolutionFinalArray: EvolutionChain[] = this.evolutionRecursiveSearch([evolutionData.chain], [] as EvolutionChain[])

      return evolutionFinalArray;
    }
  },

  created() {
    this.getData();
  }
})
</script>

<style lang="scss" scoped>
$color_1: #525252;
$color_2: #626262;
$font-family_1: "Montserrat", sans-serif;

h2 {
  font-family: $font-family_1;
}
.el-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pokemon-name {
  font-family: $font-family_1;
  font-weight: 600;
  font-size: 40px;
  color: $color_1;
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
}
.pokemon-number {
  font-family: $font-family_1;
  font-size: 24px;
  color: $color_2;
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
  color: $color_1;
  margin-bottom: 20px;
}
.section-label {
  color: $color_1;
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
  img {
    width: 267px;
    height: 267px;
  }
}
.evolution-section {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 5px;
}
@media (max-width: 960px) {
  .stats-section-col {
    align-items: center;
    justify-content: center;
  }
  .evolution-section {
    align-items: center;
    justify-content: center;
  }
}
</style>