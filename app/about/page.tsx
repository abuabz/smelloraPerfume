"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Globe, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import { useCartStore } from "@/lib/cart-store"

export default function AboutPage() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Navigation */}
      <Navbar cartCount={totalItems} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light text-gray-800 mb-4">About Our</h1>
            <p className="text-3xl text-amber-600">Fragrance Journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-gray-800">Crafting Excellence Since 1985</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over three decades, we have been dedicated to creating the world's finest fragrances. Our passion
                for perfection and commitment to quality has made us a trusted name in the luxury perfume industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every bottle tells a story, every scent captures a moment, and every fragrance we create is a testament
                to our unwavering dedication to the art of perfumery.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
                Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-amber-600 to-orange-800 rounded-3xl relative overflow-hidden">
                <Image
                  src="/images/perfume-bottle.png"
                  alt="About Us"
                  width={300}
                  height={400}
                  className="object-contain absolute inset-0 m-auto filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-gray-600">We never compromise on the quality of our ingredients and craftsmanship.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <p className="text-gray-600">Our fragrances are loved and cherished by customers worldwide.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-gray-600">We believe in building lasting relationships with our customers.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Passion</h3>
              <p className="text-gray-600">Every fragrance is created with love and dedication to the art.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The artisans behind our fragrances</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full mx-auto mb-6">
                <Image
                  src="/images/perfume-bottle.png"
                  alt="Team Member"
                  width={96}
                  height={96}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">Master Perfumer</p>
              <p className="text-sm text-gray-500">
                With 20 years of experience, Sarah leads our fragrance development team.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-6">
                <Image
                  src="/images/perfume-bottle.png"
                  alt="Team Member"
                  width={96}
                  height={96}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-4">Creative Director</p>
              <p className="text-sm text-gray-500">
                Michael brings innovative concepts and artistic vision to our brand.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-600 rounded-full mx-auto mb-6">
                <Image
                  src="/images/perfume-bottle.png"
                  alt="Team Member"
                  width={96}
                  height={96}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emma Rodriguez</h3>
              <p className="text-gray-600 mb-4">Quality Assurance</p>
              <p className="text-sm text-gray-500">
                Emma ensures every bottle meets our highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-6">Ready to Experience</h2>
          <p className="text-3xl text-yellow-400 mb-8">Our Fragrances?</p>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover our complete collection of luxury perfumes and find your signature scent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-3">Shop Now</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
