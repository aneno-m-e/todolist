<template>
  <div id="app">
    <Todos v-bind:todos='todos'/>
    <AddTodo v-on:add-todo="addTodo" /> <!-- on the “add-todo” event call the “addTodo” function -->
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  data(){
    return {
      todos: [
        {id:1, task: 'Enjoy the sun', completed: false},
        {id:2, task: 'Defeat cabbage whites', completed: false},
        {id:3, task: 'Go orca-spotting', completed: false}
      ]
    }
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    }
  },
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>

</style>
