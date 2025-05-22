<script setup lang="ts">
const { data } = useWebSocket(`ws://${location.host}/api/user-count`)
</script>

<template>
  <p class="text-xs pl-2 mb-29">
    Користувачів онлайн: {{ data }}
  </p>
</template>
