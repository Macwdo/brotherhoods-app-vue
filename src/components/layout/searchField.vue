<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import Input from '../ui/input/Input.vue'
</script>

<template>
  <div class="w-full flex-1">
    <form>
      <div class="relative">
        <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
        />
      </div>
    </form>
  </div>
</template>
