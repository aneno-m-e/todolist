<template>
  <div v-bind:class="{'completed': todo.completed}"> <!-- conditionnal class used only if completed = true -->
      <p v-on:click="markComplete">{{ todo.task }}</p>
      <button @click="$emit('delete-todo', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: [
      'todo'
  ],
  methods: {
      markComplete(){
          this.todo.completed = !this.todo.completed
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>
