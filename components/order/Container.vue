<script setup lang="ts">
import type { OrderWithProducts } from '~/types/order'

const props = defineProps<{ order: OrderWithProducts }>()
const productsShown = ref(false)
</script>

<template>
  <div class="flex items-start gap-3">
    <div
      class="flex items-center justify-between bg-base-300 group transition hover:bg-base-200 p-2"
      :class="productsShown ? 'w-fit' : 'w-full'"
    >
      <order-item :order="order" :products-shown="productsShown" />
      <button class="btn btn-circle group-hover:text-secondary-content" @click="productsShown = !productsShown">
        <Icon name="lucide:chevron-right" />
      </button>
    </div>
    <order-products v-if="productsShown" :products="props.order.products" :title="props.order.title" />
  </div>
</template>

<style scoped></style>
