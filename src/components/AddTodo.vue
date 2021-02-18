<template>
  <div>
      <form @submit="addTodo"> <!-- @submit: binds method (in <script></script>) that is going to be called whenever form is submitted -->
          <input type="text" v-model="task" name="task"> <!-- v-model: binds input to component data (in <script></script>)-->
          <button type="submit">Add</button>
      </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AddTodo',
  data() {
    return {
        task: ''
    }
  },
  methods: {
    addTodo(e) {
        e.preventDefault();
        //create a new todo object:
        const newTodoObj = {
            id: uuidv4(),
            task: this.task //refers to data bound to input
        }
        //emit event:
        this.$emit('add-todo', newTodoObj);
        //clear task field in data, also clearing input field as they are bound:
        this.task='';
      }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
