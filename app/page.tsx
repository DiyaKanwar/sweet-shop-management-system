import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}
