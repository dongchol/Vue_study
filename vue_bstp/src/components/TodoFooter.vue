<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear ALL</span>
  </div>
</template>

//CRUD DELETE
<script>
export default {
  methods: {
    clearTodo() {
      this.$emit('removeAll');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>