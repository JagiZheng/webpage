<template>
    <ul>
      <li v-for="item in order.items" :key="item">{{ item }}</li>
    </ul>
  </template>
  
  <script setup>
  import { useOrderStore } from "../stores/order";
  const orderStore = useOrderStore();
  //not needed
  const order = orderStore.order;
  </script>
  
  <style scoped></style>