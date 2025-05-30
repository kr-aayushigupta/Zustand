'use client'
// import { useCartStore } from '../store/cartStore'
import { useAppleStore } from '../store/AppleStore'

export default function AppleCard({ product }: { product: any }) {
  const addToApple = useAppleStore((s) => s.addToApple)
  return (
    <div className="shadow-green-800 p-4 rounded-xl shadow-md bg-white/50">
      <img src={product.image} alt={product.title} className="h-60 w-full object-cover rounded-lg " />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className=" text-black">{product.price}</p>
      <button
        onClick={() => {
          addToApple(product)
        }}
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
      Add to Apple Cart

      </button>
    </div>
  )
}
