<template>
  <div class=" task-input my-list">
    <input v-model="form.title" placeholder="Title" type="text">
    <input v-model="form.description" placeholder="Description" type="text">
    <button @click="onAddTask">Add task</button>
  </div>
</template>

<script setup>
const form = defineModel({
  default: () => ({title: '', description: ''})
});

const emit = defineEmits(['onAddTask'])

const onAddTask = () => emit('onAddTask')

</script>

<style scoped>
.task-input {
  margin: 10px 0;
}
</style>
