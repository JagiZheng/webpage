<template>
    <div>
      <h1 class = "header">Card Designer</h1>
      <div class="container">
        <div class="card">
          <div>
            <h2 id="edit" style="color:black;">{{ storeCounter.edit }}</h2>
          </div>
        </div>
        <div class="input_field">
          <div class="input">
            <input type="text" v-model="edit">  
            <button @click="storeCounter.addEditor(edit)" class="button">Add Text</button>
          </div>
          <div class="color">
            <label for="color" style="color:black;">Choose a color:</label>
            <select name="colors" id="selectColor" v-model="color">
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
            <button @click= "inputCounter.changeColor(color);getColor()" class="button">Apply Color</button>
          </div>
          <div class="font"> 
            <label for="font" style="color:black;">Choose a font:</label>
            <select name="fonts" id="selectFont" v-model="font">
              <option value="Times New Roman">Times New Roman</option>
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Lucida Handwriting">Lucida Handwriting</option>
              <option value="Copperplate">Copperplate</option>
              <option value="Papyrus">Papyrus</option>
            </select>
            <button @click="inputCounter.changeFont(font);getFont()">Apply Font</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
  import { ref } from "vue";
  import { userStore } from "@/stores/user";
  import { inputStore } from "@/stores/input";
  const storeCounter = userStore(); 
  const inputCounter = inputStore();
  const edit = ref("");
  const color = ref("");
  const font = ref("");
  function getColor(){
    document.getElementById("edit").style.color = inputCounter.input_color;
  };
  function getFont(){
    document.getElementById("edit").style.font = inputCounter.input_font;
  };
</script>

<style lang="scss" scoped>
  :root{
    font:"Arial"
  }
  .header{
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-60%, -80%);
    margin-left: 50px;
    margin-right: 50px;
    font-size: 3rem;
    color:aquamarine;
    text-align: center;
  }
  .container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    width: 48%;
    height: 35rem;
    background-color: aliceblue;
    margin: 10px;
    border-radius: 40px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
  .input_field {
    width: 38%;
    height: 35rem;
    background-color: aliceblue;
    margin: 10px;
    border-radius: 40px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  } 
  .font{
    margin-left: 30px;
  }
</style>