"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play, ArrowRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import Navbar from "@/components/navbar"
import { useState } from "react"

export default function HomePage() {
  const totalItems = useCartStore((state) => state.getTotalItems())
  const [activeCard, setActiveCard] = useState(1)

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Navigation */}
      <Navbar cartCount={totalItems} />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-orange-900 via-amber-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="text-white space-y-6">
              <div className="text-sm uppercase tracking-wider opacity-80">Best Perfume</div>
              <h1 className="text-6xl md:text-7xl font-light leading-tight">
                Fragrance
                <br />
                <span className="font-bold">World Class</span>
              </h1>
              <p className="text-lg opacity-90 max-w-md">
                A fragrance is a smell, usually a pleasant or sweet smell. Often perfumes are called fragrances. If you
                like the fragrance of coffee, you like its smell.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Read More
              </Button>
            </div>
            <div className="relative">
              <div className="w-96 h-96 mx-auto relative">
                <Image
                  src="/images/perfume-bottle.png"
                  alt="Luxury Perfume Bottle"
                  width={300}
                  height={400}
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-light text-gray-800">Here is More</h2>
              <p className="text-2xl text-gray-400">Details for you</p>
            </div>
            <Button variant="outline" className="rounded-full">
              About Us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-red-900 to-black rounded-2xl mb-6 relative overflow-hidden">
                <Image
                  src="/images/perfume-bottle.png"
                  alt="Perfume Detail"
                  width={200}
                  height={200}
                  className="object-contain absolute inset-0 m-auto"
                />
              </div>
              <p className="text-sm text-gray-600">
                A fragrance is a smell, usually a pleasant or sweet smell. Often perfumes are called fragrances.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-amber-600 to-orange-800 rounded-2xl mb-6 relative overflow-hidden">
                <Image
                  src="/images/perfume-bottle.png"
                  alt="Perfume Detail"
                  width={200}
                  height={200}
                  className="object-contain absolute inset-0 m-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">About Fragrance</h3>
              <p className="text-sm text-gray-600">
                A fragrance is a smell, usually a pleasant or sweet smell. Often perfumes are called fragrances. If you
                like the fragrance of coffee, you like its smell.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-8xl font-light text-gray-200">Our Note Flavor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeless Perfume Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-4">A Truly Timeless Eau De Perfume</h2>
            <p className="text-2xl text-yellow-400">Became One Of The Most Beloved Perfumes</p>
          </div>

          <div className="flex justify-center">
            <div className="relative overflow-hidden" style={{ width: "1000px" }}>
              <div
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{
                  transform: `translateX(-${activeCard * 25}%)`,
                }}
              >
                <div
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 ${
                    activeCard === 0 ? "scale-105 shadow-2xl" : "scale-95 opacity-70"
                  }`}
                  onClick={() => setActiveCard(0)}
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="relative">
                      <Image
                        src="/images/perfume-bottle.png"
                        alt="Ocean Breeze Perfume"
                        width={120}
                        height={200}
                        className="object-contain filter drop-shadow-2xl"
                        style={{
                          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3)) hue-rotate(180deg) saturate(1.2)",
                        }}
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 ${
                    activeCard === 1 ? "scale-105 shadow-2xl" : "scale-95 opacity-70"
                  }`}
                  onClick={() => setActiveCard(1)}
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative">
                        <Image
                          src="/images/perfume-bottle.png"
                          alt="Golden Sunset Perfume"
                          width={140}
                          height={220}
                          className="object-contain filter drop-shadow-2xl"
                          style={{
                            filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4)) hue-rotate(30deg) saturate(1.3)",
                          }}
                        />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full shadow-xl"></div>
                      </div>
                    </div>
                    {activeCard === 1 && (
                      <div className="text-white space-y-4 animate-fade-in-up">
                        <p className="text-sm leading-relaxed opacity-90">
                          Why are the unboxed? Sometimes boxes can be damaged in transit, torn or in less than perfect
                          condition
                        </p>
                        <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300">
                          BUY NOW →
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 ${
                    activeCard === 2 ? "scale-105 shadow-2xl" : "scale-95 opacity-70"
                  }`}
                  onClick={() => setActiveCard(2)}
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-400 via-gray-500 to-amber-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="relative">
                      <Image
                        src="/images/perfume-bottle.png"
                        alt="Elegant Musk Perfume"
                        width={110}
                        height={180}
                        className="object-contain filter drop-shadow-2xl"
                        style={{
                          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3)) sepia(0.3) saturate(1.1)",
                        }}
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeCard === index ? "bg-yellow-400 scale-125 shadow-lg" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 max-w-2xl mx-auto">
              With our fine collection of perfumes from over 100 brands, you can find the perfect scent for any
              occasion. Our perfumes are made with the finest ingredients and crafted with care.
            </p>
            <Button className="mt-6 bg-white text-black hover:bg-gray-100 rounded-full px-8">BUY NOW</Button>
          </div>
        </div>
      </section>

      {/* Seasonal Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-light text-gray-800 mb-4">Get 15% Off In</h2>
              <p className="text-3xl text-gray-400 mb-8">Seasonal Product</p>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-amber-800 to-red-900 rounded-2xl mb-6 relative overflow-hidden">
                  <Image
                    src="/images/perfume-bottle.png"
                    alt="Seasonal Product"
                    width={150}
                    height={250}
                    className="object-contain absolute inset-0 m-auto"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Oz Body Lotion(Unboxed)</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm bg-black text-white px-2 py-1 rounded">Item # 44570</span>
                    <span className="text-sm bg-red-600 text-white px-2 py-1 rounded">50% OFF</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600">
                Buy this fine and elegant perfume from our store and get the best quality product at the most affordable
                price. Limited time offer, so hurry up and grab yours now!
              </p>

              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">Buy Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full" />
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-400 rounded-full" />

            <h2 className="text-4xl font-light mb-2">Subscribe Newsletter &</h2>
            <p className="text-3xl text-yellow-400 mb-8">Get Latest News</p>

            <div className="flex max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="rounded-l-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-r-full px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/customer-stories">Customer Stories</Link>
                </li>
                <li>
                  <Link href="/video">Video</Link>
                </li>
                <li>
                  <Link href="/free-trial">Free trial</Link>
                </li>
                <li>
                  <Link href="/help">Help center</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Career</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/hiring">Hiring</Link>
                </li>
                <li>
                  <Link href="/freelance">Freelance</Link>
                </li>
                <li>
                  <Link href="/internship">Internship</Link>
                </li>
                <li>
                  <Link href="/jobs">Jobs</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">LET'S TALK</h4>
                <p className="text-sm text-gray-600 mb-2">Address</p>
                <p className="text-sm text-gray-600">
                  123 Queen St, New York, NY 10001
                  <br />
                  United States of America
                  <br />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-4xl font-light text-center">
              Let's <span className="text-gray-400">Collaboration</span> with us
            </h2>
          </div>
        </div>
      </footer>
    </div>
  )
}
