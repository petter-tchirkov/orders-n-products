<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col bg-base-200 min-h-screen">
    <Header />
    <div class="flex flex-1 p-2 gap-2">
      <NavigationMenu />
      <NuxtPage class="bg-base-100 flex flex-col grow rounded-box p-2" />
    </div>
  </div>
</template>
