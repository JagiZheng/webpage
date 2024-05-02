<template>
    <selection />
    <div>
      <h1>Create An Account</h1>
      <div>
        <SignUp />
        <form name="login-form" @submit.prevent="login(username, password)">
          <div>
            <label for="username">Username: </label>
            <input id="username" type="text" v-model="username" />
          </div>
          <div>
            <label for="password">Password: </label>
            <input id="password" type="password" v-model="password" />
          </div>
            <!--button class="submit-button" type="submit">Sign Up</button-->
        </form>        
      </div>
      <button @click="user.confirm(username, password)">Confirm</button>
      <div>
        <RouterLink to="/LoginView">Already have an account?</RouterLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { userStore } from "@/stores/user";
  //import SignUp from "../components/SignUp.vue";
  import selection from "../components/Selection.vue"
  const username = ref("");
  const password = ref("");
  const user = userStore();

  async function login(username, password) {
    console.log(username); 
    console.log(password);
  }
  </script>
  
  <style scoped></style>