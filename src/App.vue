<template>
<home-app></home-app>
<CounterView></CounterView>
</template>

<script>
import CounterView from './components/CounterView.vue'
import HomeApp from './components/HomeApp.vue';
export default {
  name: 'App',
  components: {
    CounterView,
    HomeApp  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
