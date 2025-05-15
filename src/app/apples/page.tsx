"use client"
import AppleCart from "@/app/components/AppleCart"
import AppleCard from "@/app/components/AppleCard"
import Link from "next/link"

const sampleProducts = [
  { id: '11', title: 'MacBook', price: 89999, image: '/computer.jpg' },
  { id: '22', title: 'Airpods Max', price: 999, image: '/headphones.jpg' },
  { id: '33', title: 'IPhone', price: 21999, image: '/mobile.jpg' },
  { id: '44', title: 'Ipad', price: 14999, image: '/ipad.jpg' },
  { id: '55', title: 'Apple Speakers', price: 6999, image: '/speakers.jpg' },
  { id: '66', title: 'Airpods', price: 11999, image: '/airpods.jpg' },
  { id: '77', title: 'MacBook', price: 89999, image: '/computer.jpg' },
  { id: '88', title: 'Airpods Max', price: 999, image: '/headphones.jpg' },
  { id: '99', title: 'IPhone', price: 21999, image: '/mobile.jpg' },
  { id: '111', title: 'Ipad', price: 14999, image: '/ipad.jpg' },
  { id: '222', title: 'Apple Speakers', price: 6999, image: '/speakers.jpg' },
  { id: '333', title: 'Airpods', price: 11999, image: '/airpods.jpg' },
]

export default function Page() {
  return (
    <div className="p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {sampleProducts.map((product) => (
          <AppleCard key={product.id} product={product} /> //pass product as props
        ))}
      </div>
      <AppleCart/>
    </div>
  )
}


