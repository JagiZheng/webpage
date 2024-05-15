import { defineStore } from 'pinia'

export const inputStore = defineStore({
  id: "input",
  state: () => ({
    input_color:"black",
    input_font:""
  }),
  actions: {
    changeColor(color){
      this.input_color = color;
    },
    changeFont(font){
      this.input_font = font;
    }
  }
  })