<script setup lang="ts">
const { pending, error } = await useOrders()
const orders = useOrdersStore().orders
</script>

<template>
  <section>
    <h1 class="font-bold text-3xl mb-8">
      Постачання
    </h1>
    <div v-if="pending">
      Завантаження
    </div>
    <div v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else class="flex flex-col gap-3">
      <order-container v-for="order in orders" :key="order.id" :order="order" />
    </div>
  </section>
</template>
