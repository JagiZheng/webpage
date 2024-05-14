<template>
  <div>
      <h1>Insert Cool Fact About Baboon</h1>
      <img
          src="../assets/Baboon.jpg"
          alt="Baboon"
          class="card-img"
          />
  </div>
  <div>
    <h2>{{ storeCounter.text }}</h2>
    <h2>{{ storeCounter.count }}</h2>
    <button @click="storeCounter.increaseCount">Test</button>
  </div>
</template>

<script setup>
  import { userStore } from "@/stores/user";
  const storeCounter = userStore()
</script>

<style lang="scss" scoped>
.card-img {
width: 100%;
height: 100%;
object-fit: cover;
}
</style>