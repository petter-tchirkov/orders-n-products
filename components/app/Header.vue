<script setup lang="ts">
const layout = useLayout()

function toggleSidebar() {
  layout.sidebarVisibe = !layout.sidebarVisibe
}
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm sticky top-0 left-0">
    <button class="btn btn-square bg-transparent border-none hover:bg-base-300" @click="toggleSidebar">
      <Icon name="lucide:menu" size="40" />
    </button>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">LOGO</a>
    </div>
    <div class="flex gap-2">
      <CurrentDateTime />
    </div>
  </div>
</template>
