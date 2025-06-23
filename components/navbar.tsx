"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/products", label: "Product" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contacts" },
  ]

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false)
    router.push(href)
    // Ensure scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out mx-10 rounded-full px-3",
        isScrolled ? "bg-white/40 backdrop-blur-md shadow-lg top-3" : pathname === "/" ? "bg-white/40 top-7" : "bg-black  top-7",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2 group">
            <div className="relative w-40 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/borus.png"
                alt="Smellora - Signature of Fragrance"
                fill
                className="object-contain"
                priority
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "relative transition-all duration-300 ease-in-out hover:scale-105 text-white font-light",
                  pathname === item.href && "rounded-full border px-4 py-1"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Cart Button */}
          <div className="relative">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <button onClick={() => handleNavigation("/cart")}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative transition-all duration-300 hover:scale-110 text-white"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 bg-green-500/90 text-white text-xs flex items-center justify-center">
                    {cartCount}
                  </Badge>
                </Button>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden transition-all duration-300",
              isScrolled || pathname !== "/" ? "text-gray-700 hover:bg-pink-50" : "text-white hover:bg-white/20",
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "text-left transition-colors duration-300 text-white font-light",
                    pathname === item.href && "rounded-full bg-white px-4 py-1"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}