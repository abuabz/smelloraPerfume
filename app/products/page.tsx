"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import { useCartStore } from "@/lib/cart-store"

export default function ProductsPage() {
  const router = useRouter()

  const products = [
    {
      id: 1,
      name: "Midnight Elegance",
      price: "$89.99",
      originalPrice: "$120.00",
      rating: 4.8,
      reviews: 124,
      category: "Eau de Parfum",
      image: "/images/perfume-bottle.png",
      gradient: "from-blue-900 to-purple-800",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Golden Sunset",
      price: "$75.99",
      originalPrice: "$95.00",
      rating: 4.9,
      reviews: 89,
      category: "Eau de Toilette",
      image: "/images/perfume-bottle.png",
      gradient: "from-amber-600 to-orange-800",
      badge: "New",
    },
    {
      id: 3,
      name: "Ocean Breeze",
      price: "$65.99",
      originalPrice: "$85.00",
      rating: 4.7,
      reviews: 156,
      category: "Fresh",
      image: "/images/perfume-bottle.png",
      gradient: "from-teal-600 to-blue-700",
      badge: "Limited",
    },
    {
      id: 4,
      name: "Rose Garden",
      price: "$95.99",
      originalPrice: "$125.00",
      rating: 4.9,
      reviews: 203,
      category: "Floral",
      image: "/images/perfume-bottle.png",
      gradient: "from-pink-600 to-red-700",
      badge: "Premium",
    },
    {
      id: 5,
      name: "Vanilla Dreams",
      price: "$70.99",
      originalPrice: "$90.00",
      rating: 4.6,
      reviews: 98,
      category: "Sweet",
      image: "/images/perfume-bottle.png",
      gradient: "from-yellow-600 to-amber-700",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Forest Whisper",
      price: "$80.99",
      originalPrice: "$105.00",
      rating: 4.8,
      reviews: 167,
      category: "Woody",
      image: "/images/perfume-bottle.png",
      gradient: "from-green-700 to-emerald-800",
      badge: "Organic",
    },
  ]

  const addToCart = useCartStore((state) => state.addItem)
  const totalItems = useCartStore((state) => state.getTotalItems())

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Navigation */}
      <Navbar cartCount={totalItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-light mb-4">Our Premium</h1>
          <p className="text-3xl text-yellow-400 mb-8">Fragrance Collection</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of luxury perfumes, each crafted with the finest ingredients
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="rounded-full">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <div className="flex space-x-2">
                <Badge variant="secondary">All</Badge>
                <Badge variant="outline">Eau de Parfum</Badge>
                <Badge variant="outline">Eau de Toilette</Badge>
                <Badge variant="outline">Fresh</Badge>
                <Badge variant="outline">Floral</Badge>
              </div>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search products..." className="pl-10 w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="block">
                <div
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div
                    className={`relative h-80 bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center`}
                  >
                    <Badge className="absolute top-4 left-4 bg-white text-black">{product.badge}</Badge>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={150}
                      height={250}
                      className="object-contain filter drop-shadow-2xl"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-sm text-gray-400">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-black">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        className="flex-1 bg-black text-white hover:bg-gray-800 rounded-full"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: Number.parseFloat(product.price.replace("$", "")),
                            originalPrice: Number.parseFloat(product.originalPrice.replace("$", "")),
                            size: "50ml",
                            category: product.category,
                            image: "/images/perfume-bottle.png",
                            gradient: product.gradient,
                            inStock: true,
                          })
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-4">Featured This Month</h2>
            <p className="text-xl text-gray-600">Our most popular fragrances</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-light text-gray-800">Signature Collection</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience our exclusive signature collection featuring rare and exotic ingredients sourced from around
                the world. Each fragrance tells a unique story and captures the essence of luxury.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium ingredients from 5 continents</li>
                <li>• Hand-crafted by master perfumers</li>
                <li>• Limited edition bottles</li>
                <li>• Sustainable and ethical sourcing</li>
              </ul>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">Explore Collection</Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-6 aspect-square flex items-center justify-center">
                <Image
                  src="/images/perfume-bottle.png?height=200&width=120"
                  alt="Featured Product 1"
                  width={120}
                  height={200}
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-700 rounded-3xl p-6 aspect-square flex items-center justify-center">
                <Image
                  src="/images/perfume-bottle.png?height=200&width=120"
                  alt="Featured Product 2"
                  width={120}
                  height={200}
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
