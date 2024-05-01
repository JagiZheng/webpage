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