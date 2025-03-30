<template>
  <div class="task-card my-style">
    <div>
      <h4>{{ form.title }}</h4>
      <p>{{ form.description }}</p>
    </div>
    <div>
      <button @click="onDone" v-if="!form.status">✅</button>
      <button @click="onRemove" v-else>❌</button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  form: {
    required: true,
    default: () => ({
      id: 0,
      title: 'Create video',
      description: 'And upload on Youtube',
      status: false
    })
  }
})
const emit = defineEmits(['onDone', 'onRemove'])

const onDone = () => emit('onDone')

const onRemove = () => emit('onRemove')
</script>

<style scoped>
  .task-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
