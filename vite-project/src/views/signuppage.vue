<template>
    <selection />
    <div>
      <h1>Create An Account</h1>
      <div>
        <SignUp />
        <RouterLink to="/LoginView">Already have an account?</RouterLink>
        <div>
        <input v-model="username" type="text" placeholder="username">
            <h1 id = "user">username:{{ username }}</h1>
        </div>
    </div>
    <div>
    </div>
        <input v-model="password" type="text" placeholder="password">
        <h1 id = "password">password:{{ password }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import SignUp from "../components/SignUp.vue";
  import selection from "../components/Selection.vue"
  const username = ref("");
  const password = ref("");

  async function login(username, password) {
    console.log(username); 
    console.log(password);
  }
  </script>
  
  <style scoped></style>