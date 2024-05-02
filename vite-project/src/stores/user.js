import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: "user",
  state: () => ({
    user: {
        username: "",
        password: ""
    },
    count: 0,
    edit: "",
    text: ""
  }),
  actions: {
    confirm(username, password){
        this.user.username = username
        this.user.password = password
    },
    increaseCount(){
        this.count++
    },
    addEditor(edit){
        if (this.user.username == ""){
        this.text = "Cannot make changes without logging in first"
        }
        else{
        this.edit = edit
        this.text = this.user.username + " made a change on " + new Date();
        }
    }
  }
})
