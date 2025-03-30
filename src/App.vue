<template>
  <main>
    <TaskForm @onAddTask="addTask"></TaskForm>
    <ul class="task-list">
      <li v-for="item in taskList" :key="item.id">
        <TaskCard
            :form="item"
            @onDone="setDoneTask(item.id)"
            @onRemove="removeTask(item.id)"
        />
      </li>
    </ul>
  </main>
</template>

<script setup>
import './index.css'
import TaskForm from "./components/TaskForm.vue";
import TaskCard from "./components/TaskCard.vue";
import {ref} from 'vue'

const taskList = ref([{id: 0, title: 'Test task', description: 'Test description', status: false}])

const addTask = ({title, description}) => {
  if (!title) {
    return
  }
  const newTask = {id: Date.now(), title, description, status: false}
  taskList.value.push(newTask)
}

const setDoneTask = (id) => {
  const targetIndex = taskList.value.findIndex(task => task.id === id)

  if (targetIndex > -1) {
    taskList.value[targetIndex].status = !taskList.value[targetIndex].status
  }
}

const removeTask = (id) => {
  taskList.value = taskList.value.filter(task => task.id !== id)
}

</script>

<style scoped>

.task-list {
  list-style: none;
}
</style>
