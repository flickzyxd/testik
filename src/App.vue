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
import {onBeforeMount, ref} from 'vue'

export const LOCAL_STORAGE_KEY = 'Lorem ipsum dolor.';
const defaultTaskList = [{id: 0, title: 'Test task', description: 'Test description', status: false}];

const taskList = ref(defaultTaskList)

const addTask = ({title, description}) => {
  if (!title) {
    return
  }
  const newTask = {id: Date.now(), title, description, status: false}
  taskList.value.push(newTask)


  saveTasks()
}

const setDoneTask = (id) => {
  const targetIndex = taskList.value.findIndex(task => task.id === id)

  if (targetIndex > -1) {
    taskList.value[targetIndex].status = !taskList.value[targetIndex].status
  }

  saveTasks()
}

const removeTask = (id) => {
  taskList.value = taskList.value.filter(task => task.id !== id)
  saveTasks()
}

const loadTasks = () => {
  const savedTasks = window.localStorage.getItem(LOCAL_STORAGE_KEY)

  if (savedTasks) {
    taskList.value = JSON.parse(savedTasks)
  }
};

const saveTasks = () => {
  const itemsJson = JSON.stringify(taskList.value)
  window.localStorage.setItem(LOCAL_STORAGE_KEY, itemsJson)
}


onBeforeMount(loadTasks)
</script>

<style scoped>

.task-list {
  list-style: none;
}
</style>
