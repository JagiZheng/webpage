<template>
    <router-link :to ="pkmnPath" class = "card">
      <h2>{{ pokemon.name }}</h2>
    </router-link>
    <h3>{{ id }}</h3>
    <div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    pokemon: Object,
    id: Number,
  });
  const pkmnPath = computed(() => {
    //this will return the url string to replace id
    return `/PokemonData/${props.pokemon.name}`
  })
  </script>
  
  <style scoped>
  img {
    width: 300px;
  }
  </style>