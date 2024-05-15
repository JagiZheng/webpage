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
    text: "",
    error: ""
  }),
  actions: {
    confirm(username, password){
        this.user.username = username
        this.user.password = password
    },
    check(username, password){
        /*if(username = username from database and password = password from database){
            this.user.username = username
            this.user.password = password
        }
        else{
            this.error = "Username or Password is incorrect"
        }
        */
    },
    increaseCount(){
        this.count++
    },
    addEditor(edit){
        if (this.user.username == ""){
        this.edit = "Cannot make changes without logging in first"
        }
        else{
        this.edit = edit
        this.text = this.user.username + " made a change on " + new Date();
        }
    }
  }
})