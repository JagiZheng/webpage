<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <nav>
      <RouterLink to="/SecretDoor">Secret Door</RouterLink>
      <RouterLink to="/SignupPage">SignUp Page</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
</style>