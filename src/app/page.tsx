"use client"
import Cart from "./componets/cart"
import ProductCard from "./componets/productCard"

const sampleProducts = [
  { id: '1', title: 'Laptop', price: 10000, image: '/computer.jpg' },
  { id: '2', title: 'Headphones', price: 500, image: '/headphones.jpg' },
  { id: '3', title: 'SmartPhone', price: 5000, image: '/mobile.jpg' },
  { id: '4', title: 'Ipad', price: 15000, image: '/ipad.jpg' },
  { id: '5', title: 'Speakers', price: 5000, image: '/speakers.jpg' },
  { id: '6', title: 'Airpods', price: 10000, image: '/airpods.jpg' },
]

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleProducts.map((product) => (

          <ProductCard key={product.id} product={product} /> //pass product as props
          
        ))}
      </div>
      <Cart/>
    </div>
  )
}
