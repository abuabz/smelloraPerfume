"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Share2, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react"
import Navbar from "@/components/navbar"
import { useCartStore } from "@/lib/cart-store"
import { useState } from "react"

// Mock product data - in a real app, this would come from a database
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "Midnight Elegance",
      price: "$89.99",
      originalPrice: "$120.00",
      rating: 4.8,
      reviews: 124,
      category: "Eau de Parfum",
      description:
        "A sophisticated blend of bergamot, jasmine, and sandalwood that captures the essence of midnight elegance. This luxurious fragrance opens with fresh citrus notes, evolves into a floral heart, and settles into a warm, woody base.",
      ingredients: ["Bergamot", "Jasmine", "Sandalwood", "Vanilla", "Musk"],
      size: "50ml",
      concentration: "Eau de Parfum (20%)",
      longevity: "6-8 hours",
      sillage: "Moderate to Strong",
      gradient: "from-blue-900 to-purple-800",
      images: ["/images/perfume-bottle.png", "/images/perfume-bottle.png", "/images/perfume-bottle.png"],
      inStock: true,
      badge: "Best Seller",
    },
    "2": {
      id: 2,
      name: "Golden Sunset",
      price: "$75.99",
      originalPrice: "$95.00",
      rating: 4.9,
      reviews: 89,
      category: "Eau de Toilette",
      description:
        "Inspired by the golden hour, this warm and inviting fragrance combines citrus freshness with amber warmth. Perfect for both day and evening wear.",
      ingredients: ["Orange Blossom", "Amber", "Cedar", "Patchouli", "White Musk"],
      size: "50ml",
      concentration: "Eau de Toilette (15%)",
      longevity: "4-6 hours",
      sillage: "Moderate",
      gradient: "from-amber-600 to-orange-800",
      images: ["/images/perfume-bottle.png", "/images/perfume-bottle.png", "/images/perfume-bottle.png"],
      inStock: true,
      badge: "New",
    },
  }

  return products[id as keyof typeof products] || products["1"]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  const [quantity, setQuantity] = useState(1)
  const addToCart = useCartStore((state) => state.addItem)
  const totalItems = useCartStore((state) => state.getTotalItems())

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: Number.parseFloat(product.price.replace("$", "")),
        originalPrice: Number.parseFloat(product.originalPrice.replace("$", "")),
        size: product.size,
        category: product.category,
        image: "/images/perfume-bottle.png",
        gradient: product.gradient,
        inStock: product.inStock,
      })
    }
  }

  return (
    <div className="min-h-screen bg-white page-transition">
      <Navbar cartCount={totalItems} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-pink-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div
                className={`relative h-96 lg:h-[500px] bg-gradient-to-br ${product.gradient} rounded-3xl p-8 flex items-center justify-center overflow-hidden group`}
              >
                <Badge className="absolute top-4 left-4 bg-white text-black z-10">{product.badge}</Badge>
                <Image
                  src={product.images[0] || "/images/perfume-bottle.png"}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-24 bg-gradient-to-br ${product.gradient} rounded-xl p-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300`}
                  >
                    <Image
                      src={image || "/images/perfume-bottle.png"}
                      alt={`${product.name} view ${index + 2}`}
                      width={80}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-light text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="hover:text-pink-600">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-pink-600">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                <Badge className="bg-red-100 text-red-800">Save 25%</Badge>
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Product Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Size:</span>
                    <span className="ml-2 text-gray-600">{product.size}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Concentration:</span>
                    <span className="ml-2 text-gray-600">{product.concentration}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Longevity:</span>
                    <span className="ml-2 text-gray-600">{product.longevity}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Sillage:</span>
                    <span className="ml-2 text-gray-600">{product.sillage}</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-900">Quantity:</span>
                <div className="flex items-center border rounded-full">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex space-x-4">
                <Button
                  className="flex-1 bg-black text-white hover:bg-gray-800 rounded-full py-3 transition-all duration-300 hover:scale-105"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button className="bg-pink-600 text-white hover:bg-pink-700 rounded-full px-8 py-3 transition-all duration-300 hover:scale-105">
                  Buy Now
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-xs text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-xs text-gray-600">Authentic</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                  <p className="text-xs text-gray-600">30-Day Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Ingredients</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {product.ingredients.map((ingredient, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-pink-50 hover:border-pink-200 transition-colors duration-300"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Link key={item} href={`/products/${item + 2}`}>
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-green-600 to-teal-700 p-6 flex items-center justify-center">
                    <Image
                      src="/images/perfume-bottle.png?height=200&width=150"
                      alt={`Related Product ${item}`}
                      width={150}
                      height={200}
                      className="object-contain filter drop-shadow-2xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Related Fragrance {item}</h3>
                    <p className="text-2xl font-bold text-gray-900">$79.99</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
