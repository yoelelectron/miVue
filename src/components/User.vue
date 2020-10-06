<template lang="pug">
  div.users
    h1 User component
    ul
      li.list(
        v-for="user in users"
      ) {{ user.name }} - {{ user.email }} -- {{ user.username }}
        button(type="button" class="btn btn-danger" v-on:click="deleteUser(user)") X

    form(v-on:submit.prevent="addUser")
      input(type="text" v-model="newUser.name" placeholder="Ingrese nombre")
      input(type="email" v-model="newUser.email" placeholder="Ingrese Email")
      input(type="text" v-model="newUser.username" placeholder="Ingrese username")
      br
      hr
      button(
        type="submit" class="btn btn-success"
      ) Registrar Usuario

</template>

<script>
import axios from 'axios'
export default {
 data() {
   return {
     users: [],

     newUser: { }
   }
 },

 methods: {
   addUser(e){
    // e.preventDefault() poniendo e como parametro, o en el template form
     console.log("Agregando Usuario", this.newUser)
     this.users.push(this.newUser)
     this.newUser = {}
   },

   deleteUser(user) {
     this.users.splice(this.users.indexOf(user),1)
   }
 },

 created() {
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then(res => this.users = res.data)
 }
}
</script>

<style scoped>
.users{
  background: chartreuse;
}
.list {
  color: yellow;
}
</style>>
