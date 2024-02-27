import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
export const Route = createLazyFileRoute('/dashboard')({
  component: () => Dashboard()
})

const defaultProduct = {
  id: '',
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: []
}
type ProductType = {
  id: string,
  title: string,
  description: string,
  price: number
  discountPercentage: number
  rating: number,
  stock: number,
  brand: string
  category: string,
  thumbnail: string,
  images: string[]
}

export default function Dashboard() {
  const [data, setData] = useState<ProductType>(defaultProduct)

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.title}</h1>
      <h1>{data.images.map(i => i)}</h1>
    </div>
  )
}
