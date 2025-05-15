'use client'
import { useCartStore } from '../store/cartStore'

export default function Cart() {
  const { items, removeFromCart, increaseQty, decreaseQty , clearCart, totalItems} = useCartStore()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="  p-4 z-50 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 flex justify-between">
        Cart
      </h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
        <p onClick={() => clearCart()} className="text-red-500 hover:cursor-pointer hover:text-red-300">Clear All item </p>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium">{item.title}</p>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)} className="px-2 hover:cursor-pointer hover:bg-white hover:text-black">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)} className="px-2 hover:cursor-pointer hover:bg-white hover:text-black">+</button>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:cursor-pointer font-bold">🗑</button>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
          <button className="mt-2 w-full bg-green-600 text-white py-2 rounded">Checkout</button>
        </>
      )}
    </div>
  )
}


