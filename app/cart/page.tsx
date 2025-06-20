"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Plus, Minus, X, ShoppingBag, ArrowLeft, Gift, Truck } from "lucide-react"
import Navbar from "@/components/navbar"
import { useCartStore } from "@/lib/cart-store"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore()
  const totalItems = useCartStore((state) => state.getTotalItems())

  const subtotal = getTotalPrice()
  const shipping = subtotal > 100 ? 0 : 15.0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50 page-transition">
      <Navbar cartCount={totalItems} />

      {/* Header */}
      <div className="pt-24 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-light text-gray-900 mb-2">Shopping Cart</h1>
              <p className="text-gray-600">{items.length} items in your cart</p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <div
                    className={`relative w-24 h-32 bg-gradient-to-br ${item.gradient} rounded-2xl p-3 flex items-center justify-center flex-shrink-0`}
                  >
                    <Image
                      src={"/images/perfume-bottle.png"}
                      alt={item.name}
                      width={80}
                      height={100}
                      className="object-contain filter drop-shadow-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="outline" className="mb-1 text-xs">
                          {item.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.size}</p>
                        {!item.inStock && (
                          <Badge variant="destructive" className="mt-1">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-900">${item.price}</span>
                        <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center border rounded-full">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full w-8 h-8"
                          disabled={!item.inStock}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="px-3 py-1 font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full w-8 h-8"
                          disabled={!item.inStock}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Code */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Gift className="w-5 h-5 mr-2 text-pink-600" />
                Promo Code
              </h3>
              <div className="flex space-x-4">
                <Input placeholder="Enter promo code" className="flex-1 rounded-full" />
                <Button className="bg-pink-600 text-white hover:bg-pink-700 rounded-full px-6">Apply</Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-32">
              <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center">
                    <Truck className="w-4 h-4 mr-1" />
                    Shipping
                  </span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-pink-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800 rounded-full py-3 transition-all duration-300 hover:scale-105">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </Button>

              <Button
                variant="outline"
                className="w-full mt-3 rounded-full py-3 transition-all duration-300 hover:scale-105"
              >
                Continue Shopping
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6">
              <h4 className="font-semibold mb-3 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-pink-600" />
                Free Shipping
              </h4>
              <p className="text-sm text-gray-600">Enjoy free shipping on orders over $100. Your order qualifies!</p>
            </div>

            {/* Security Badge */}
            <div className="bg-gray-100 rounded-3xl p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-green-600 rounded-full" />
              </div>
              <p className="text-sm text-gray-600">Secure checkout with 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
