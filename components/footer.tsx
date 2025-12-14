import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Sweetory</h3>
            <p className="text-sm opacity-90">
              Bringing the authentic taste of Indian sweets to your doorstep since 2024.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  All Sweets
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@sweetory.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Sweet Street, Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Sweetory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
