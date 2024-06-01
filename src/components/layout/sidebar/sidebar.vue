<script setup lang="ts">
import SidebarFooter from './sidebarFooter.vue'
import SidebarHeader from './sidebarHeader.vue'
import SidebarLinks from './sidebarLinks.vue'
</script>

<template>
  <div class="hidden border-r bg-muted/40 md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <SidebarHeader />
      <SidebarLinks />
    </div>
    <SidebarFooter />
  </div>
</template>
