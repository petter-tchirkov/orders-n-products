<script setup lang="ts">
import type { Product } from '~/types/order'

const props = defineProps<{
  title: string
  products: Product[]
}>()

const isModalShown = ref(false)
const selectedProduct = ref<Product | null>(null)

function openModal(product: Product) {
  selectedProduct.value = product
  isModalShown.value = true
}
function closeModal() {
  isModalShown.value = false
}
</script>

<template>
  <div class="flex flex-col bg-base-300 p-2 grow">
    <h2>{{ props.title }}</h2>
    <div class="flex flex-col gap-3">
      <nuxt-link
        v-for="product in props.products" :key="product.id" to=""
        class="flex items-center w-full justify-between"
      >
        <div class="flex items-center gap-3">
          <img :src="product.photo" :alt="product.title" class="w-16 h-16">
          {{ product.title }}
        </div>
        <button class="btn btn-circle" @click="openModal(product)">
          <Icon name="lucide:trash-2" />
        </button>
      </nuxt-link>
      <app-modal v-if="isModalShown" @close="closeModal()">
        <template #title>
          Підтвердження
        </template>
        <template #body>
          Ви точно хочете видалити {{ selectedProduct?.title }}?
        </template>
        <template #footer>
          <div class="flex gap-3 mt-4 justify-end">
            <button class="btn btn-info">
              Відміна
            </button>
            <button class="btn btn-error">
              Видалити
            </button>
          </div>
        </template>
      </app-modal>
    </div>
  </div>
</template>
