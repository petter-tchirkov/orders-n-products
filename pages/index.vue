<script setup lang="ts">
const { pending, error } = await useOrders()
const orders = useOrdersStore().orders
</script>

<template>
  <section>
    <app-page-title>
      Постачання
    </app-page-title>
    <div v-if="pending">
      Завантаження...
    </div>
    <div v-else-if="error">
      Помилка: {{ error.message }}
    </div>
    <div v-else class="flex flex-col gap-3">
      <order-table :data="orders" />
    </div>
  </section>
</template>
