<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      todos: [
        {id:1, task: 'Enjoy the sun'},
        {id:2, task: 'Defeat cabbage whites'},
        {id:3, task: 'Go orca-spotting'}
      ]
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
