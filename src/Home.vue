<script setup lang="ts">
import Sidebar from '@/components/layout/sidebar/sidebar.vue'
import MobileMenu from '@/components/layout/mobile/mobileMenu.vue'
import SearchField from '@/components/layout/searchField.vue'
import UserMenu from '@/components/layout/userMenu.vue'
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <MobileMenu />
        <SearchField />
        <UserMenu />
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"></main>
    </div>
  </div>
</template>
