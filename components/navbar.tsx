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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : pathname === "/" ? "bg-transparent" : "bg-black",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2 group">
            <div className="relative w-40 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/smellora-logo.png"
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
                  "relative transition-all duration-300 ease-in-out hover:scale-105",
                  pathname === item.href
                    ? isScrolled || pathname !== "/"
                      ? "text-pink-600 font-semibold"
                      : "text-yellow-400 font-semibold"
                    : isScrolled || pathname !== "/"
                      ? "text-gray-700 hover:text-pink-600"
                      : "text-white hover:text-yellow-400",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600 animate-in slide-in-from-left duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Cart Button */}
          <button onClick={() => handleNavigation("/cart")}>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "relative transition-all duration-300 hover:scale-110",
                isScrolled || pathname !== "/"
                  ? "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                  : "text-white hover:bg-white/20",
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 bg-pink-600 text-white text-xs flex items-center justify-center animate-pulse">
                {cartCount}
              </Badge>
            </Button>
          </button>

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
                    "text-left transition-colors duration-300",
                    pathname === item.href
                      ? "text-pink-600 font-semibold"
                      : isScrolled || pathname !== "/"
                        ? "text-gray-700 hover:text-pink-600"
                        : "text-white hover:text-yellow-400",
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
