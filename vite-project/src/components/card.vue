<template>
    <div>
    <h1 class = "header">Cool Monkeys</h1>
    <!--div>
      <h2 class="header">Header</h2>
      <p>Baboons are very cool</p>
      <ul>
        <li class="item" id="special-item">Very Hairy</li>
        <li class="item">Stinky</li>
        <li class="item">Goofs around</li>
      </ul>
    </div!--> 
    <div class="container">
       <div class="card">
        <h2 class="card-header">Gorilla</h2>
          <RouterLink to="/Gorilla">
            <img
            src="../assets/Gorilla.jpg"
            alt="Gorilla"
            class="card-img"
            />
          </RouterLink>
        <h3 class="card-price">Exhibit 1</h3>
      </div>
      <div class="card">
        <h2 class="card-header">Baboon</h2>
          <RouterLink to="/Baboon">
            <img
            src="../assets/Baboon.jpg"
            alt="Baboon"
            class="card-img"
            />
          </RouterLink>
        <h3 class="card-price">Exhibit 2</h3>
      </div>
      <div class="card">
        <h2 class="card-header">Macaques</h2>
         <RouterLink to="/Macaque">
            <img
            src="../assets/Macaque.jpg"
            alt="Macaque"
            class="card-img"
            />
            </RouterLink>
        <h3 class="card-price">Exhibit 3</h3>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    body,
html,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 20px;
  background-color: skyblue;
}
body {
}

#special-item {
  color: blue;
}
.header{
  font-size: 5rem;
  color:rgb(86, 11, 11);
  text-align: center;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60vw;
  border-radius: 20px;
  margin: 10px auto;
  background-color: rgb(216, 253, 160);
}
.card {
  width: 28%;
  height: 25rem;
  background-color: aliceblue;
  margin: 10px;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}
.card-header {
  font-size: 2rem;
  color:rgb(86, 11, 11);
  text-transform: uppercase;
  text-align: center;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-price {
  color:rgb(86, 11, 11);
  font-size: 1.4rem;
}
</style>