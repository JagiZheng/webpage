2<template>
    <div>
      <label for="username">Address: </label>
      <input id="username" type="text" v-model="address" />
    </div>
    <div>
      <label for="password">Items: </label>
      <input id="password" type="text" v-model="item" />
      <button @click="addToOrder">Add item</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useOrderStore } from "../stores/order";
  const orderStore = useOrderStore();
  
  const item = ref("");
  const address = ref("");
  const addToOrder = () => {
    orderStore.addOrderItem(item.value);
    item.value = "";
  };
  </script>
  
  <style></style>