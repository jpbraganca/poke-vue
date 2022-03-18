<template>
  <div class="main-frame">
    <div class="pokemon-evolution" v-for="(pokemon, name) in Evolution" :key="name">
      <img :src="pokemon.image" class="space-items" />
      <span>{{pokemon.name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Icon } from '@iconify/vue';

type EvolutionChain = {
  name: string;
  image: string;
  pokemonChainID: number;
}

export default defineComponent({
  data() {
    return {
      evolutionArray: [] as any[]
    }
  },
  components: {
    Icon,
  },
  props: {
    Evolution: Array,
  },
  // computed: {
  //   finalArray():any{
  //     const evolutionArray:EvolutionChain[] = []
  //     this.Evolution!.map((resp: any) => {
  //       evolutionArray.push({name: resp.name, image: resp.image, pokemonChainID: resp.pokemonChainID})
  //     })
  //     console.log(evolutionArray)
  //     return evolutionArray;
  //   }
  // }
  async mounted() {
    // for await (const value of this.test()) {
    //   values.push(v);
    // }
    this.evolutionArray = [...this.Evolution];
  }
})
</script>

<style scoped>
.space-items {
  margin-right: 10px;
  width: 100px;
  height: 100px;
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