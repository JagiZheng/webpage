<template>
    <selection/>
    <div>
        <h1>{{ text }}</h1>
        <img
            src="../assets/Gorilla.jpg"
            alt="Gorilla"
            class="card-img"
            />
    </div>
    <form name="submit-form" @submit.prevent="add(text)">
        <div>
            <label for="text">Add fun facts about Gorilla: </label>
            <input id="text" type="text" v-model="text" />
        </div>
        <button class="add-button" type="add">Add</button>
    </form>
    <div>
        <h2>{{ storeCounter.count }}</h2>
        <button @click="increase">Test</button>
    </div>
    <h1>{{ newText }}</h1>
</template>

<script setup>
    import selection from "../components/Selection.vue";
    import { ref } from "vue";
    import { useCounterStore } from "@/stores/counter";

    const storeCounter = useCounterStore()
    
    const text = ref("")
    const newText = ("")
    function add(text){
        console.log("Good Morning")
        newText = text;
    };
    function increase(){
        count.value++;
    };
</script>

<style lang="scss" scoped>
  .card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
</style>