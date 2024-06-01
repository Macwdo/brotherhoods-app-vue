<script setup>
import { onMounted, reactive, ref } from 'vue'

const user = reactive({})

function handleLogin() {
  console.log(user)
}
</script>

<template>
  {{ user.email }}
  <template v-if="user.email === ''">
    <h1>Email vazio</h1>
  </template>
  <template v-else>
    <h1>{{ user.email }}</h1>
  </template>
  <form action="" @submit.prevent="handleLogin()">
    <input type="text" placeholder="Username" v-model="user.email" />
    <input type="password" placeholder="Password" v-model="user.password" />
    <button type="submit">Login</button>
  </form>
</template>
