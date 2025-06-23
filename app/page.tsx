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

  // Add this data array at the top of your component, after the imports
  const perfumeCards = [
    {
      id: 1,
      name: "Ocean Breeze",
      image: "/assets/bottle_01.png",
      gradient: "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
      filter: "hue-rotate(180deg) saturate(1.2)",
      accent: "bg-gradient-to-br from-yellow-400 to-amber-500",
      description: "A refreshing blend of sea salt and citrus notes that captures the essence of ocean waves and coastal breezes."
    },
    {
      id: 2,
      name: "Golden Sunset",
      image: "/assets/bottle_02.png",
      gradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-600",
      filter: "hue-rotate(30deg) saturate(1.3)",
      accent: "bg-gradient-to-br from-yellow-300 to-amber-400",
      description: "Warm and luxurious fragrance with amber, vanilla, and golden honey notes that evoke a perfect sunset."
    },
    {
      id: 3,
      name: "Elegant Musk",
      image: "/assets/bottle_03.png",
      gradient: "bg-gradient-to-br from-slate-400 via-gray-500 to-amber-600",
      filter: "sepia(0.3) saturate(1.1)",
      accent: "bg-gradient-to-br from-amber-400 to-yellow-500",
      description: "A sophisticated blend of white musk, cedar wood, and soft florals for the modern connoisseur."
    },
    {
      id: 4,
      name: "Rose Garden",
      image: "/assets/bottle_04.png",
      gradient: "bg-gradient-to-br from-pink-400 via-rose-500 to-red-500",
      filter: "hue-rotate(320deg) saturate(1.4)",
      accent: "bg-gradient-to-br from-pink-300 to-rose-400",
      description: "A romantic composition of Bulgarian rose petals, peony, and soft jasmine with a touch of morning dew."
    },
    {
      id: 5,
      name: "Midnight Mystery",
      image: "/assets/bottle_05.png",
      gradient: "bg-gradient-to-br from-indigo-600 via-purple-700 to-black",
      filter: "hue-rotate(270deg) saturate(1.5) brightness(0.9)",
      accent: "bg-gradient-to-br from-purple-400 to-indigo-500",
      description: "An enigmatic blend of dark berries, black pepper, and smoky incense for those who embrace the night."
    }
  ];

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Navigation */}
      <Navbar cartCount={totalItems} />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-yellow-600 via-amber-700 to-black overflow-hidden w-full">
        <div className="absolute left-60 -bottom-20">
          <Image
            src="/assets/bottle_13.png"
            alt="Luxury Perfume Bottle Mockup"
            width={700}
            height={500}
            className="object-contain filter drop-shadow-2xl"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full h-full">
            <div className="text-white space-y-2">
              <p className="text-sm font-extralight ps-5">-- Buy Popular <br />Colgness on</p>
              {/* <div className="text-sm uppercase tracking-wider opacity-80">Best Perfume</div> */}
              <div className="text-6xl md:text-7xl">
                <h1 className="font-extralight leading-tight text-[#f89c75]">Fragrance</h1>
                <h1 className="font-light mt-3 text-white/80">World Class</h1>
              </div>
              {/* <p className="text-lg opacity-90 max-w-md">
                A fragrance is a smell, usually a pleasant or sweet smell. Often perfumes are called fragrances. If you
                like the fragrance of coffee, you like its smell.
              </p> */}
              {/* <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Read More
              </Button> */}
            </div>
            {/* <div className="relative">
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
            </div> */}
            <div className="ps-56 pe-10 flex items-end h-full py-10 text-white/70">
              <div className="border border-white/50 rounded-2xl px-5 py-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-grain"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.5 9.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M9.5 4.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M9.5 14.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M4.5 19.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M14.5 9.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19.5 4.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M14.5 19.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M19.5 14.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                <p className="mt-2 font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos ipsa voluptatibus ipsam autem voluptatem sint error nihil dolores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="pt-32 pb-10 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-light text-gray-800">Here is More</h2>
              <p className="text-2xl text-gray-400">Details for you</p>
            </div>
            <Button variant="outline" className="rounded-full">
              About Us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div> */}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-16 justify-center">
              <h1 className="text-black text-4xl font-light">Here is More <br /><span className="text-gray-600">Details for you</span></h1>
              <div className="bg-white flex flex-col gap-3 rounded-3xl p-8 shadow-lg">
                <div className="flex justify-between gap-5">
                  <div>
                    <div className="bg-gray-100 rounded-xl p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sparkles"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    A fragrance is a smell, usually a pleasant or sweet smell. Often perfumes are called fragrances.
                  </p>
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-red-900 to-black rounded-2xl relative overflow-hidden">
                  <Image
                    src="/assets/bottle_01.png"
                    alt="Perfume Detail"
                    width={350}
                    height={200}
                    className="object-contain absolute inset-0 m-auto"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-hidden flex items-end">
              <div className="w-full h-[90%] bg-gradient-to-br from-amber-600 to-orange-800 rounded-[30px] relative overflow-hidden">
                <img
                  src="/assets/bottle_02.png"
                  alt="Perfume Detail"
                  // width={500}
                  // height={600}
                  className="object-cover absolute inset-0 m-auto h-full w-full"
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-center md:pe-20">
              <h3 className="text-4xl font-light mb-10">About <br />Fragrance</h3>
              <p className="text-sm text-gray-600">
                A fragrance is a smell, usually a pleasant or sweet smell. Often perfumes are called fragrances. If you
                like the fragrance of coffee, you like its smell.
              </p>

            </div>
          </div>
        </div>
        <div className="absolute text-[120px] font-normal text-gray-400/20 -bottom-12 left-[13%]">Our Note Flavour</div>
      </section>

      {/* Timeless Perfume Section */}
      {/* Timeless Perfume Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:px-20">
            <h2 className="text-5xl font-light mb-4">A Truly Timeless Eau De Perfume Became One Of The Most Beloved Perfumes </h2>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => setActiveCard(activeCard > 0 ? activeCard - 1 : perfumeCards.length - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setActiveCard(activeCard < perfumeCards.length - 1 ? activeCard + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center overflow-hidden">
              <div className="relative" style={{ width: "1000px" }}>
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-6"
                  style={{
                    transform: `translateX(-${activeCard * 20}%)`,
                  }}
                >
                  {perfumeCards.map((card, index) => {
                    const isCenter = index === activeCard;
                    const isVisible = Math.abs(index - activeCard) <= 2;

                    return (
                      <div
                        key={index}
                        className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 ${isCenter
                          ? "scale-100 shadow-2xl opacity-100"
                          : isVisible
                            ? "scale-90 opacity-60"
                            : "scale-75 opacity-30"
                          }`}
                        onClick={() => setActiveCard(index)}
                        style={{ width: "280px", height: "420px" }}
                      >
                        <div className={`absolute inset-0 ${card.gradient}`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                        {/* Card Image */}
                        <div className="relative h-full flex items-center justify-center">
                          <div className="relative h-full">
                            <img
                              src={card.image}
                              alt={card.name}
                              // width={140}
                              // height={220}
                              className="object-cover w-full h-full filter drop-shadow-2xl"
                              style={{
                                filter: `drop-shadow(0 25px 50px rgba(0,0,0,0.4)) ${card.filter}`,
                              }}
                            />
                            {/* <div className={`absolute -top-3 -right-3 w-10 h-10 ${card.accent} rounded-full shadow-xl`}></div> */}
                          </div>
                        </div>

                        {/* Gradient overlay for side cards */}
                        {!isCenter && isVisible && (
                          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Center Card Text */}
                {perfumeCards[activeCard] && (
                  <div className="text-center mt-8 animate-fade-in-up">
                    <h3 className="text-2xl font-light text-white mb-3">{perfumeCards[activeCard].name}</h3>
                    <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed mb-6">
                      {perfumeCards[activeCard].description}
                    </p>
                    {/* <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full px-8 py-3 text-sm font-medium transition-all duration-300">
                      BUY NOW →
                    </Button> */}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-16">
            <p className="text-gray-400 max-w-2xl mx-auto">
              With our fine collection of perfumes from over 100 brands, you can find the perfect scent for any
              occasion. Our perfumes are made with the finest ingredients and crafted with care.
            </p>
          </div> */}
        </div>
      </section>

      {/* Seasonal Offer Section */}
      <section className="md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="bg-gray-100 px-12 py-5 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div>
                <h2 className="text-5xl font-light text-gray-800 mb-4">Get 15% Off In</h2>
                <p className="text-3xl text-gray-400 mb-8">Seasonal Product</p>

                <div className="bg-white rounded-3xl shadow-lg w-fit">
                  <div className="w-96 h-80 bg-gradient-to-br from-amber-800 to-red-900 rounded-2xl mb-6 relative overflow-hidden">
                    <img
                      src="/assets/bottle_06.png"
                      alt="Seasonal Product"
                      // width={150}
                      // height={250}
                      className="object-cover h-full w-full absolute inset-0 m-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 ">
                <div className="flex items-start justify-end ">
                  <img
                    src="/assets/bottle_07.png"
                    alt="black image"
                    className="object-cover rounded-full absolute top-0"
                  />
                  <div className="w-36 h-20 border-gray-300 border-dashed border-2 rounded-full absolute top-3 right-5"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light">Oz Body Lotion(Unboxed)</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gary-500 px-2 py-1 rounded">Item # 44570</span>
                      <span className="text-sm bg-red-600/90 text-white px-2 py-1 rounded">50% OFF</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600">
                  Buy this fine and elegant perfume from our store and get the best quality product at the most affordable
                  price. Limited time offer, so hurry up and grab yours now!
                </p>

                <Button className="border-black border bg-transparent text-black hover:bg-gray-800 hover:text-white rounded-full px-8">Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 px-12 bg-gray-50  text-white">
        <div className="py-20 rounded-3xl bg-gradient-to-r from-gray-900 to-black p-12 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            {/* <div className=""> */}
            <img
              src="/assets/bottle_09.png"
              className="absolute top-10 right-20 w-32 h-20 bg-white/10 rounded-full"
            />
            <img
              src="/assets/bottle_08.png"
              className="absolute bottom-10 left-20 w-32 h-20 bg-yellow-400 rounded-full"
            />
            <h2 className="text-5xl font-extralight mb-2">Subscribe Newsletter &</h2>
            <p className="text-4xl text-yellow-400 mb-8 font-extralight">Get Latest News</p>

            <div className="flex max-w-md mx-auto relative">
              <Input
                placeholder="Enter your email address"
                className="rounded-full bg-white/10 h-12 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-yellow-400 h-12 text-black hover:bg-yellow-500 rounded-full px-4 absolute right-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></Button>
            </div>
          </div>
        </div>
        {/* </div> */}
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
