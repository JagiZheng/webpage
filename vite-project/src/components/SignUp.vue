<template>
  <form name="login-form" @submit.prevent="login(username, password)">
    <div>
      <label for="username">Username: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">Password: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button class="submit-button" type="submit">Sign Up</button>
  </form>
</template>
  
<script>
  import { ref } from 'vue';
  const username = ref("");
  const password = ref("");
</script>
  
<style></style>