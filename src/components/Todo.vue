<template>
  <div class="todo">
      <p>{{ todo.task }}</p>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: [
      'todo'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
