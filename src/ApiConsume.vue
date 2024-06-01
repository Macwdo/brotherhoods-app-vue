<script setup>
import { onMounted, reactive, ref } from 'vue'

const users = ref([])

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  await new Promise((r) => setTimeout(r, 2000))
  console.log()
  users.value = data
})
</script>

<template>
  <h1>Ola</h1>
  <template v-if="users.length === 0">
    <h1>Carregando...</h1>
  </template>
  <template v-else>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </template>
</template>
