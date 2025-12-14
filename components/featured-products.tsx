"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

const featuredProducts = [
  {
    id: 1,
    name: "Kaju Katli",
    category: "Milk Sweet & Fudge",
    price: 450,
    image: "/kaju-katli-cashew-barfi-indian-sweet-diamond-shape.jpg",
    description: "Premium cashew fudge",
  },
  {
    id: 2,
    name: "Gulab Jamun",
    category: "Syrup-Soaked",
    price: 280,
    image: "/gulab-jamun-brown-balls-syrup-indian-sweet-hd-8k.jpg",
    description: "Soft, syrupy perfection",
  },
  {
    id: 3,
    name: "Motichoor Laddoo",
    category: "Laddoos",
    price: 320,
    image: "/motichoor-laddoo-orange-golden-indian-sweet-round-.jpg",
    description: "Melt-in-mouth delight",
  },
  {
    id: 4,
    name: "Rasgulla",
    category: "Syrup-Soaked",
    price: 250,
    image: "/rasgulla-white-spongy-bengali-sweet-in-syrup-hd-8k.jpg",
    description: "Spongy and delicious",
  },
  {
    id: 5,
    name: "Besan Laddoo",
    category: "Laddoos",
    price: 300,
    image: "/besan-laddoo-gram-flour-indian-sweet-golden-hd-8k.jpg",
    description: "Traditional gram flour treat",
  },
  {
    id: 6,
    name: "Milk Cake",
    category: "Milk Sweet & Fudge",
    price: 380,
    image: "/milk-cake-kalakand-indian-sweet-white-crumbly-hd-8.jpg",
    description: "Creamy milk delicacy",
  },
  {
    id: 7,
    name: "Jalebi",
    category: "Syrup-Soaked",
    price: 200,
    image: "/jalebi-orange-spiral-crispy-indian-sweet-soaked-hd.jpg",
    description: "Crispy, syrupy spirals",
  },
  {
    id: 8,
    name: "Mysore Pak",
    category: "Regional & Festive",
    price: 420,
    image: "/mysore-pak-ghee-sweet-golden-south-indian-festive-.jpg",
    description: "South Indian specialty",
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Sweets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved and bestselling sweets, handpicked just for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent">{product.category}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  <p className="text-2xl font-bold text-accent">₹{product.price}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="/products">View All Sweets</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
