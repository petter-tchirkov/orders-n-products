import type { Product } from '~/types/product'

export async function useProducts() {
  const productsStore = useProductsStore()
  const { data, error, pending } = await useFetch<Product[]>('/api/products')
  productsStore.products = data.value ?? []

  return { error, pending }
}
