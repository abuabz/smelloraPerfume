"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Eye, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import { useCartStore } from "@/lib/cart-store"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Midnight Collection Shoot",
      category: "Product Photography",
      image: "/images/perfume-bottle.png",
      gradient: "from-blue-900 to-purple-800",
    },
    {
      id: 2,
      title: "Golden Hour Campaign",
      category: "Lifestyle",
      image: "/images/perfume-bottle.png",
      gradient: "from-amber-600 to-orange-800",
    },
    {
      id: 3,
      title: "Artisan Craftsmanship",
      category: "Behind the Scenes",
      image: "/images/perfume-bottle.png",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: 4,
      title: "Floral Essence Series",
      category: "Product Photography",
      image: "/images/perfume-bottle.png",
      gradient: "from-pink-600 to-red-700",
    },
    {
      id: 5,
      title: "Ocean Breeze Campaign",
      category: "Lifestyle",
      image: "/images/perfume-bottle.png",
      gradient: "from-teal-600 to-blue-700",
    },
    {
      id: 6,
      title: "Luxury Packaging Design",
      category: "Design",
      image: "/images/perfume-bottle.png",
      gradient: "from-yellow-600 to-amber-700",
    },
    {
      id: 7,
      title: "Master Perfumer at Work",
      category: "Behind the Scenes",
      image: "/images/perfume-bottle.png",
      gradient: "from-green-700 to-emerald-800",
    },
    {
      id: 8,
      title: "Signature Collection",
      category: "Product Photography",
      image: "/images/perfume-bottle.png",
      gradient: "from-purple-700 to-indigo-800",
    },
    {
      id: 9,
      title: "Brand Story Video",
      category: "Video",
      image: "/images/perfume-bottle.png",
      gradient: "from-red-700 to-pink-800",
    },
  ]

  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Navigation */}
      <Navbar cartCount={totalItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-light mb-4">Visual</h1>
          <p className="text-3xl text-yellow-400 mb-8">Gallery</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the artistry behind our fragrances through stunning visuals and behind-the-scenes moments
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-black text-white px-6 py-2">All</Badge>
            <Badge variant="outline" className="px-6 py-2 hover:bg-gray-100 cursor-pointer">
              Product Photography
            </Badge>
            <Badge variant="outline" className="px-6 py-2 hover:bg-gray-100 cursor-pointer">
              Lifestyle
            </Badge>
            <Badge variant="outline" className="px-6 py-2 hover:bg-gray-100 cursor-pointer">
              Behind the Scenes
            </Badge>
            <Badge variant="outline" className="px-6 py-2 hover:bg-gray-100 cursor-pointer">
              Design
            </Badge>
            <Badge variant="outline" className="px-6 py-2 hover:bg-gray-100 cursor-pointer">
              Video
            </Badge>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0 || index === 4 || index === 8 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative h-80 ${index === 0 || index === 4 || index === 8 ? "md:h-96" : ""} bg-gradient-to-br ${item.gradient} p-8 flex items-center justify-center`}
                >
                  {item.category === "Video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      >
                        <Eye className="w-4 h-4 text-white" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      >
                        <Heart className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <Badge variant="secondary" className="mb-2 bg-white/20 text-white">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">Behind the Craft</h2>
            <p className="text-xl text-gray-300">Watch how our master perfumers create magic</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-amber-600 to-orange-800 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="w-12 h-12 text-white ml-2" />
                </div>
              </div>
              <Image
                src="/images/perfume-bottle.png"
                alt="Behind the Craft Video"
                width={800}
                height={600}
                className="object-cover w-full h-full opacity-60"
              />
            </div>

            <div className="text-center mt-8">
              <h3 className="text-2xl font-semibold mb-4">The Art of Perfumery</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Go behind the scenes and discover the meticulous process of creating our signature fragrances. From
                selecting the finest ingredients to the final bottling process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-4">Follow Our Journey</h2>
            <p className="text-xl text-gray-600">@obsession_perfumes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`/images/perfume-bottle.png`}
                  alt={`Instagram post ${item}`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">Follow Us on Instagram</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
