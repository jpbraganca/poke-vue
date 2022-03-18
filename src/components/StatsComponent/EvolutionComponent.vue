<template>
  <div class="main-frame">
    <div class="pokemon-evolution" v-for="(pokemon, index) in Evolution" :key="index">
      <el-image :src="pokemon.image" class="space-items" />
      <span>{{pokemon.name.replace(/(\b[a-z](?!\s))/g, (c) => c.toUpperCase())}}</span>
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
})
</script>

<style scoped>
.space-items {
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
  margin: 15px 35px 0px 0px;
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