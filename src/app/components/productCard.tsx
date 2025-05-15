'use client'
import { useCartStore } from '../store/cartStore'

export default function ProductCard({ product }: { product: any }) {
  const addToCart = useCartStore((s) => s.addToCart)
  return (
    <div className="shadow-green-800 p-4 rounded-xl shadow-md bg-white/15">
      <img src={product.image} alt={product.title} className="h-50 w-full object-cover rounded-lg " />

      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="dark:text-white text-black">{product.price}</p>

      <button
        onClick={() => {
          addToCart(product)
        }}
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
      Add to Cart
      </button>
    </div>
  )
}
