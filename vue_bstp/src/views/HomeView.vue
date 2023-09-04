<template>
  <div class="home">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoFooter from '../components/TodoFooter.vue'
// @ is an alias to /src
//import test_comp from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  created() {
        if(localStorage.length>0){
            for (var i = 0; i<localStorage.length;i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
		addTodo(todoItem) {
			localStorage.setItem(todoItem, todoItem);
			this.todoItems.push(todoItem);
		},
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>
