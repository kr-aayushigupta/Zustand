"use client"
import Cart from "@/app/components/cart"
import AppleCard from "@/app/components/AppleCard"
import Link from "next/link"

const sampleProducts = [
  { id: '1', title: 'MacBook', price: 89999, image: '/computer.jpg' },
  { id: '2', title: 'Airpods Max', price: 999, image: '/headphones.jpg' },
  { id: '3', title: 'IPhone', price: 21999, image: '/mobile.jpg' },
  { id: '4', title: 'Ipad', price: 14999, image: '/ipad.jpg' },
  { id: '5', title: 'Apple Speakers', price: 6999, image: '/speakers.jpg' },
  { id: '6', title: 'Airpods', price: 11999, image: '/airpods.jpg' },
]

export default function Page() {
  return (
    <div className="p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {sampleProducts.map((product) => (
          <AppleCard key={product.id} product={product} /> //pass product as props
        ))}
      </div>
      <Cart/>
    </div>
  )
}


