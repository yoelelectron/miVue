<template lang="pug">
div.container
  h1.title {{ title }}
    // div.myHtml(v-html= "myHtml")
    h3.showName(v-if="showName")
      p {{ user.lastName }} otro
    h3.showName(v-else)
      p {{ user.firstName }} estw
    hr
    ul
      li.tasks(v-for="task in tasks") {{ task.titulo }}
    hr
    hr
    div
      input(
        type="text" v-model="user.lastName"
      )
      button(
        type="button" v-on:click="greeting(user.lastName)"
        ) Saludar
    hr
    hr
    input(
      type="text" v-on:keyup="typing"
    )
    br
    input(
      type="text" v-on:keyup.enter="typingEnter"
    )
    hr
    hr
    p {{ fullName }}
    h3 {{ msg }}



</template>

<script>
export default {
   data() {
     return {
       title: 'Hola VUEjs',
       user: {
         firstName: "Laura",
         lastName: "Reina"

       },
       myHtml: '<h5> Mi h3 </h5>',
       showName: true,
       tasks: [
         {titulo: 'eat'},
         {titulo: 'sleep'},
         {titulo: 'laundry'},
         {titulo: 'run'},
         {titulo: 'race'},
       ]
     }
   },

   methods: {
     greeting(name){
       alert('Hola! ' + name)
     },

     typing(e){
       console.log(e.target.value)
     },
     typingEnter(e){
       console.log('presiono enter')
     }
   },

   computed: {
     fullName() {
       return this.user.firstName + ' ' + this.user.lastName
     }
   },

   props: {
     msg: {
       type: String,
       default: 'Nada desde el pattern'
     }
   }
 }

</script>

<style scoped>
div.container {
  background: red;
  color: black;
}

</style>
