<template>
  <div>
    <PokeCard
      v-for="(monster, index) in pokemon"
      :key="monster.name"
      :pokemon="monster"
      :id="index + 1"
    />
    <selection />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokeCard from "../components/pokemon.vue";
import selection from "../components/Selection.vue" 
const pokemon = ref("");

async function getPokemon() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon");
  let data = await res.json();
  pokemon.value = data.results;
}
onMounted(() => {
  getPokemon();
});
</script>

<style scoped></style>