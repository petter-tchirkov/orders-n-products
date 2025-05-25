<template>
  <div class="flex flex-col bg-base-200 min-h-screen">
    <app-header />
    <main class="flex flex-1 p-2 gap-2">
      <app-navigation-menu />
      <nuxt-page class="bg-base-100 flex flex-col grow rounded-box p-2" />
    </main>
  </div>
</template>
