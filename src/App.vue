<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/test">
            Test
          </router-link>
        </li>
        <li>
          <router-link to="/">
            Users
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <!--<test msg="Priviet Perras"/>-->

  </div>
</template>

<script>
import test from './components/test'
import User from './components/User'

export default {
  name: 'App',
  components: {
    test,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
