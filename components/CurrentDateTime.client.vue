<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'

const today = useDateFormat(useNow(), 'DD.MM.YYYY')
const now = useDateFormat(useNow(), 'HH:mm:ss')
</script>

<template>
  <div class="flex flex-col">
    <span class="flex items-center gap-2">
      <Icon name="lucide:calendar" />
      {{ today }}
    </span>
    <span class="flex items-center gap-2">
      <Icon name="lucide:clock" />
      {{ now }}
    </span>
  </div>
</template>
