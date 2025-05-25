import type { Product } from './product'

export interface OrderWithProducts {
  id: number
  title: string
  date: string
  description: string
  products: Product[]
}
