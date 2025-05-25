<script setup lang="ts">
const props = defineProps<{
  options: string[]
}>()

const emits = defineEmits<{
  (e: 'filter', value: string): void
}>()
</script>

<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">
      Фільтрувати за типом
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink @click="emits('filter', '')">
          Скинути фільтр
        </NuxtLink>
      </li>
      <li v-for="option in props.options" :key="option">
        <NuxtLink @click="emits('filter', option)">
          {{ option }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
