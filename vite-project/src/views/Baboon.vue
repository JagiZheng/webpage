<template>
  <selection/>
  <div>
      <h1>Insert Cool Fact About Baboon</h1>
      <img
          src="../assets/Baboon.jpg"
          alt="Baboon"
          class="card-img"
          />
  </div>
</template>

<script setup>
  import selection from "../components/Selection.vue"
</script>

<style lang="scss" scoped>
.card-img {
width: 100%;
height: 100%;
object-fit: cover;
}
</style>