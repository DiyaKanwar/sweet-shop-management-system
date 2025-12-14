"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Search } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

const allProducts = [
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
  {
    id: 9,
    name: "Barfi",
    category: "Milk Sweet & Fudge",
    price: 350,
    image: "/barfi-indian-milk-sweet-colorful-decorated-hd-8k.jpg",
    description: "Classic milk fudge",
  },
  {
    id: 10,
    name: "Rasmalai",
    category: "Syrup-Soaked",
    price: 320,
    image: "/rasmalai-milk-cream-soaked-indian-sweet-hd-8k.jpg",
    description: "Milk-soaked delicacy",
  },
  {
    id: 11,
    name: "Coconut Laddoo",
    category: "Laddoos",
    price: 280,
    image: "/placeholder.svg?height=400&width=400",
    description: "Coconut bliss",
  },
  {
    id: 12,
    name: "Peda",
    category: "Regional & Festive",
    price: 300,
    image: "/placeholder.svg?height=400&width=400",
    description: "Traditional milk sweet",
  },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const { addItem } = useCart()
  const { toast } = useToast()

  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  const handleAddToCart = (product: (typeof allProducts)[0]) => {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">All Sweets</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for sweets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Milk Sweet & Fudge">Milk Sweet & Fudge</SelectItem>
                <SelectItem value="Syrup-Soaked">Syrup-Soaked</SelectItem>
                <SelectItem value="Laddoos">Laddoos</SelectItem>
                <SelectItem value="Regional & Festive">Regional & Festive</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No sweets found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
