<!-- eslint-disable style/indent -->
<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  products: Product[]
  title: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <section class="grow bg-base-300 min-w-3/5 py-3 rounded-xs">
    <div class="flex justify-between px-4 mb-4">
      <h2>
        {{ props.title }}
      </h2>
      <button class="btn btn-circle" @click="emit('close')">
        <Icon name="lucide:x" />
      </button>
    </div>
    <table class="table">
      <tr v-for="product in props.products" :key="product.id">
        <td>
          <img :src="product.photo" :alt="product.title" class="w-10 h-10">
        </td>
        <td>{{ product.title }}</td>
        <td>
          <span
            class="badge text-xs"
            :class="{ 'badge-success': product.status === 1, 'badge-warning': product.status === 0 }"
          >
            {{ getProductStatus(product.status) }}
          </span>
        </td>
        <td>
          <button class="btn btn-circle">
            <Icon name="lucide:trash-2" />
          </button>
        </td>
      </tr>
    </table>
  </section>
</template>

<style scoped></style>
