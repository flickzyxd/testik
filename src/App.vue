<template>
  <main>
    <TaskInput @onAddTask="addTask"></TaskInput>
    <ul class="task-list my-list">
      <li v-for="item in taskList" :key="item.id">
        <TaskCard @onRemove="removeTask(item.id)" @onDone="setDoneTask(item.id)" :model="item"></TaskCard>
      </li>
    </ul>
  </main>
</template>

<script>
import './index.css'
import TaskInput from "./components/TaskInput.vue";
import TaskCard from "./components/TaskCard.vue";
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    TaskCard,
    TaskInput
  },
  setup() {
    const taskList = ref([{id: 0, title: 'Test task', description: 'Test description', status: false}])

    const addTask = ({title, description}) => {
      if(!title){
        return
      }
      const newTask = {id: Date.now(), title, description, status: false}
      taskList.value.push(newTask)
    }

    const setDoneTask = (id) => {
      const targetIndex = taskList.value.findIndex(el => el.id === id)
      if (targetIndex > -1){
        taskList.value[targetIndex].status = !taskList.value[targetIndex].status
      }
    }
    const removeTask = (id) => {
      taskList.value = taskList.value.filter(x => x.id !== id)
    }

    return {
      taskList,
      addTask,
      removeTask,
      setDoneTask
    }
  }
}

</script>

<style scoped>

.task-list {
  list-style: none;
}
</style>