<template>
    <div class = "container">
        <div>
            <RouterLink class = "link" to="/about">Monkeys</RouterLink>
        </div>
        <div>
            <RouterLink class = "link" to="/">Pokemon</RouterLink>
        </div>
        <div>
            <RouterLink class = "link" to="/signuppage">SignUp</RouterLink>
        </div>
        <div>
            <RouterLink class = "link" to="/SecretDoor">Go Back</RouterLink>
        </div>
    </div>   
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .container {
        width: 10vw;
        height: 6.5vw;
        border-radius: 20px;
        margin-left: 210px;
        background-color: lightblue;
        text-align: center;
        position: absolute;
        margin: 30px;
        top: 0;
        right: 0;;
    }
    
   .link{
        font-size : 20px;
        line-height: 1.5;
   }
</style>