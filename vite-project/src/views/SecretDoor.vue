<template>
    <form name="login-form" @submit.prevent="submit(code)">
        <div>
            <label for="code">Secret Code: </label>
            <input id="code" type="text" v-model="code" />
        </div>
        <button class="submit-button" type="submit">Start</button>
    </form>
    <div id = "div1">
        <h2 id = "status">{{ status }}</h2>
        <RouterLink ref = "link" id = "link" to="/HomePage">Door</RouterLink>
        <SecretCode />
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import SecretCode from "../components/SecretCode.vue";
    const code = ref("");
    let status = "Status Check";
    
    console.log(code);

    function submit(code){
        if (code != "Open Sesame"){
            status = "Thou Shalt Not Enter"
            console.log(status)
        }
        else{
            status = "Free To Pass"
            this.$refs.link.to = "/HomePage";
            this.$refs.link.innerHTML = "Open Door";
            console.log(status)
        }
        return status
    }
</script>

<style lang="scss" scoped>

</style>