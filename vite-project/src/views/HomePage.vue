<template>
    <h1 class = "title">YOU ARE LOGGED IN, THIS IS THE FRONT PAGE</h1>
    <div class = "container">
        <ul>
            <li>Would you like a tour on monkeys?</li>
            <li>Perhaps check out the pokemon list?</li>
            <li>Or you could go back...</li>
        </ul>
    </div>
    <selection /> 
</template>
  
<script setup>
    import selection from "../components/Selection.vue"
</script>
  
<style lang="scss" scoped>
  .title{
    text-align: center;
  }
  .container{
    background-color: lightblue;
    line-height: 2;
    border-radius: 20px;
    height: 6.5vw
  }
  ul{
    color: rgb(38, 182, 38);
  }
</style>