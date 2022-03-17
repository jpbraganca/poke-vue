<template>
  <div v-if="pokemonId">
    <div class="main-frame">
      <div class="pokemon-evolution" v-for="(item, index) in sortedArray" :key="index">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

import { Icon } from '@iconify/vue';

type EvolutionChain = {
  name: string;
  image: string;
  pokemonChainID: number;
}

export default defineComponent({
  data() {
    return {
      evolutionList: [] as Array<any>,
    }
  },
  components: {
    Icon,
  },
  props: {
    pokemonId: Number,
  },
  // computed: {
  //   sortedArray(): any {
  //     console.log(this.evolutionList.sort((a: any, b: any) => a.id - b.id));
  //   },
  // },
  methods: {
    async getEvolutionData() {

      const pokemonSpecies = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + this.pokemonId);
      const evolutionChain = await axios.get(pokemonSpecies.data.evolution_chain.url);

      return evolutionChain.data;
    },

    recursiveSearch(data: any, evolutionChain: Array<EvolutionChain>) {
      if (data[0].evolves_to.length > 0) {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + data[0].species.name).then((resp) => {
          evolutionChain.push({ name: data[0].species.name, image: resp.data.sprites.other.dream_world.front_default, pokemonChainID: resp.data.id });
          this.recursiveSearch(data[0].evolves_to, evolutionChain);
        })
      } else {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + data[0].species.name).then((resp) => {
          evolutionChain.push({ name: data[0].species.name, image: resp.data.sprites.other.dream_world.front_default, pokemonChainID: resp.data.id });
        })
      }
      return evolutionChain;
    },

    async handleEvolutionData() {
      const evolutionChain: Array<EvolutionChain> = []

      const evolutionData = await this.getEvolutionData();
      const evolutionFinalArray = this.recursiveSearch([evolutionData.chain], evolutionChain)

      return evolutionFinalArray;
    }
  },

  created() {
    this.handleEvolutionData().then((result: Array<EvolutionChain>) => {
      console.log(result);
      this.evolutionList = result;
    })
  }
})
</script>

<style scoped>
.space-items {
  margin-right: 10px;
}

.main-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #525252;
}

.pokemon-evolution {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 960px) {
  .main-frame > img {
    width: 80px;
    height: 80px;
  }

  .main-frame > Icon {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 992px) {
  .main-frame > img {
    width: 122px;
    height: 122px;
  }

  .main-frame > Icon {
    width: 48px;
    height: 48px;
  }
}
</style>