import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Milk Sweet & Fudge",
    description: "Rich, creamy delights",
    image: "/indian-milk-burfi-kalakand-sweet-close-up-hd.jpg",
    href: "/category/milk-sweet-fudge",
  },
  {
    name: "Syrup-Soaked",
    description: "Juicy, indulgent treats",
    image: "/gulab-jamun-rasgulla-syrup-soaked-indian-sweets-hd.jpg",
    href: "/category/syrup-soaked",
  },
  {
    name: "Laddoos",
    description: "Traditional round sweets",
    image: "/motichoor-besan-laddoo-indian-sweets-golden-hd.jpg",
    href: "/category/laddoos",
  },
  {
    name: "Regional & Festive",
    description: "Special occasion sweets",
    image: "/indian-festive-sweets-assortment-diwali-hd.jpg",
    href: "/category/regional-festive",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore by <span className="text-primary">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From traditional favorites to festive specialties, find your perfect sweet moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border-2 hover:border-primary">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
