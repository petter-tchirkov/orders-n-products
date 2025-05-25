import type { Product } from '~/types/product'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  return { products }
})
