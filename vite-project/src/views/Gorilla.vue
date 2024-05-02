<template>
    <selection/>
    <div>
        <img
            src="../assets/Gorilla.jpg"
            alt="Gorilla"
            class="card-img"
            />
    </div>
    <div>
        <div>
            <h2 class="edit">{{ storeCounter.edit }}</h2>
            <h2>{{ storeCounter.text }}</h2>
        </div>
            <input type="text" v-model="edit">  
            <button @click="storeCounter.addEditor(edit)" class="button">Add Text</button>
        <div>
            <button @click="storeCounter.increaseCount">Test</button>
        </div>
        <div>
            <h2>{{ storeCounter.count }}</h2>
        </div>
    </div>
</template>

<script setup>
    import selection from "../components/Selection.vue";
    import { ref } from "vue";
    import { userStore } from "@/stores/user";

    const storeCounter = userStore()    
    const edit = ref("")
</script>

<style lang="scss" scoped>
  .card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
  .button{
    width: 80px;
    height: 20px;
  }
  .edit{
    margin-bottom: 100px;
  }
</style>