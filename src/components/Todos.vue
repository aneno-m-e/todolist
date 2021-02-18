<template>
  <div class="todolist">
    <h2>Cool things to do</h2>
    <ul>
      <li v-bind:key="todo.id" v-for='todo in todos'>
        <Todo v-bind:todo="todo" v-on:delete-todo="$emit('delete-todo', todo.id)" />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  name: 'Todos',
  props: [
    'todos'
  ],
  components: {
    Todo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
