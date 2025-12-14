import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-primary/20">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Authentic Indian Sweets
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Sweeten Your Life with <span className="text-primary">Traditional Flavors</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover our handcrafted collection of premium Indian sweets, made with love and the finest ingredients.
              From rich milk-based delicacies to syrup-soaked treats, every bite is a celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/products">Explore All Sweets</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/categories">Browse by Category</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/colorful-indian-sweets-assortment-with-milk-burfi-.jpg"
                alt="Assorted Indian sweets"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border max-w-[200px]">
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
