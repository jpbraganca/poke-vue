<template class="frame">
  <PokedexHeader />
  <PokeMainContent />
  <PokedexFooter />
</template>

<script lang="ts">
import PokedexHeader from './components/PokedexHeader.vue';
import PokeMainContent from './components/PokeMainContent.vue'
import PokedexFooter from './components/PokedexFooter.vue'

export default {
  components: {
    PokedexHeader,
    PokeMainContent,
    PokedexFooter,
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300&display=swap");@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,300&display=swap");
.frame {
  background: #E5E5E5;
}
</style>
