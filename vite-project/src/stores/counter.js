import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { userStore } from './user'

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    text: "Insert Fun Facts"
  }),
  actions: {
    increaseCount(){
      this.count++
    },
    addText(addText){
      this.text = username + addText 
    }
  }
})
