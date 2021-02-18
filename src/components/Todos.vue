<template>
  <div class="todolist">
    <h2>Cool things to do</h2>
    <ul>
      <li v-bind:key="todo.id" v-for='todo in todos'>
        <span>
          {{todo.id}} : {{todo.task}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  props: [
    'todos'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
