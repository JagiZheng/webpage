<template>
    <selection/>
    <div>
        <h1>Insert Cool Fact About Macaque</h1>
        <img
            src="../assets/Macaque.jpg"
            alt="Macaque"
            class="card-img"
            />
    </div>
    <div>        
        <h2 >{{ storeCounter.text }}</h2>
        <h2>{{ storeCounter.count }}</h2>
        <button @click="storeCounter.increaseCount">Test</button>
    </div>
</template>

<script setup>
    import selection from "../components/Selection.vue"
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