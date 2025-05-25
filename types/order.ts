export interface PriceItem {
  value: number
  symbol: string
  isDefault: boolean
}

export interface Guarantee {
  start: string
  end: string
}

export interface Product {
  id: number
  serialNumber: number
  isNew: boolean
  photo: string
  title: string
  type: string
  status: 0 | 1
  specification: string
  guarantee: Guarantee
  price: PriceItem[]
  date: string
}

export interface OrderWithProducts {
  id: number
  title: string
  date: string
  description: string
  products: Product[]
}
