<template>
  <h1 class = "title">Card Creator</h1>
  <div class = "container">
    <h1>Type something you want in the Card to start!</h1>
  </div>
  <div class="scroll">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when a
    n unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release of 
    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum. It is a long 
    established fact that a reader will be distracted by the readable content of a page
    when looking at its layout. The point of using Lorem Ipsum is that it has a 
    more-or-less normal distribution of letters, as opposed to using 'Content here, 
    content here', making it look like readable English. Many desktop publishing packages
    and web page editors now use Lorem Ipsum as their default model text, and a search 
    for 'lorem ipsum' will uncover many web sites still in their infancy.
  </div>
  <div class="dropdown">
    <button>Profile</button>
    <div class="dropdown-options">
      <RouterLink to="/Baboon">
        <a href="#">My Cards</a>
      </RouterLink>
      <a href="#">Setting</a>
      <a href="#" @click="storeCounter.logout()">Logout</a>
    </div>
  </div>
  <SignUp/>
</template>

<script setup>
  import { userStore } from "@/stores/user";
  const storeCounter = userStore() 
  import SignUp from "../components/SignUp.vue"  
</script>

<style lang="scss" scoped>
.title{
  text-align: center;
}
.container{
  background-color: lightblue;
  line-height: 2;
  border-radius: 20px;
  height: 6.5vw;
  padding-left: 100px;
  padding-right: 100px;
  text-align: center;
}
ul{
  color: rgb(38, 182, 38);
}
div.scroll {
  background-color: #fed9ff;
  width: 600px;
  height: 250px;
  margin-top: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  padding: 20px;
}
body{
  background: #0a0a23;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}
//Profile
.dropdown {
  display: inline-block;
  position: relative;
}

button{
  border:none;
  border-radius:5px;
  padding:15px 30px;
  font-size:18px;
  cursor:pointer;
}

button:hover{
  background-color:#ddd;
}

.dropdown-options {
  display: none;
  position: absolute;
  overflow: auto;
  background-color:#fff;
  border-radius:5px;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
  text-align: center;
}

.dropdown:hover .dropdown-options {
  display: block;
}

.dropdown-options a {
  display: block;
  color: #000000;
  padding:15px 20px;
  //Height,Width
}

.dropdown-options a:hover {
  color: #0a0a23;
  background-color: #d1f0d7;
  border-radius:5px;
}
</style>