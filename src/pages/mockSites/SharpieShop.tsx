
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Search, Heart, Filter, Menu, ChevronDown, Star, Package, Truck } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { SketchButton, SketchBadge, SketchInput } from "@/components/marker";

const SharpieShop = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Hand-drawn Notebook",
      price: "$14.99",
      originalPrice: "$19.99",
      description: "A unique notebook with sketched lines and doodles",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&auto=format&fit=crop",
      badge: "Popular",
      rating: 4.8,
      reviews: 124,
      category: "Stationery"
    },
    {
      id: 2,
      name: "Marker Set Pro",
      price: "$24.99",
      originalPrice: "$29.99",
      description: "Professional set of sketch markers in various colors",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&auto=format&fit=crop",
      badge: "New",
      rating: 4.6,
      reviews: 89,
      category: "Art Supplies"
    },
    {
      id: 3,
      name: "Doodle Canvas",
      price: "$19.99",
      originalPrice: "",
      description: "Pre-sketched canvas ready for your creative touch",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&auto=format&fit=crop",
      badge: "",
      rating: 4.5,
      reviews: 57,
      category: "Canvas"
    },
    {
      id: 4,
      name: "Sketchy Journal",
      price: "$12.99",
      originalPrice: "",
      description: "Daily journal with hand-drawn borders and accents",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&auto=format&fit=crop",
      badge: "",
      rating: 4.3,
      reviews: 42,
      category: "Stationery"
    },
    {
      id: 5,
      name: "Doodle Pens Set",
      price: "$16.99",
      originalPrice: "$21.99",
      description: "Set of fine-tip pens perfect for doodling and sketching",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&auto=format&fit=crop",
      badge: "Sale",
      rating: 4.7,
      reviews: 103,
      category: "Art Supplies"
    }
  ];

  const categories = ["All", "Stationery", "Art Supplies", "Canvas"];

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-[#FFCF8B] min-h-screen p-4">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link 
            to="/showcase" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <ArrowLeft size={20} className="transform rotate-1" />
            Back to Showcase
          </Link>
          
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white rounded-full border-2 border-black transform rotate-1">
              <Search size={20} className="transform -rotate-1" />
            </button>
            <button className="p-2 bg-white rounded-full border-2 border-black transform -rotate-1">
              <Heart size={20} className="transform rotate-1" />
            </button>
            <div className="relative">
              <button className="p-2 bg-white rounded-full border-2 border-black transform rotate-2">
                <ShoppingCart size={20} className="transform -rotate-2" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-white text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            SharpieShop
          </h1>
          <p className="text-xl mt-4 font-comic">An e-commerce platform with a hand-drawn aesthetic</p>
        </div>

        {/* Featured banner */}
        <div className="mb-8 bg-black text-white p-6 sketch-border transform -rotate-0.5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold transform rotate-1" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                Summer Sketching Sale!
              </h2>
              <p className="text-lg">Get 20% off all art supplies this week</p>
            </div>
            <SketchButton className="transform rotate-1 bg-white text-black">
              Shop Now
            </SketchButton>
          </div>
        </div>

        {/* Filter and search bar */}
        <div className="mb-8 p-4 bg-white sketch-border transform rotate-0.5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <span className="flex items-center font-bold">
                <Filter size={18} className="mr-1 transform rotate-1" />
                Categories:
              </span>
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 border-2 ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-black'} border-black rounded-md transform ${selectedCategory === category ? 'rotate-0' : 'rotate-1'} transition-transform`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="w-full md:w-auto flex items-center">
              <SketchInput 
                placeholder="Search products..." 
                className="w-full md:w-64 transform -rotate-0.5"
              />
              <SketchButton className="ml-2 transform rotate-1">
                <Search size={18} />
              </SketchButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="transform transition-transform hover:-rotate-1 hover:scale-105">
              <SketchCard className="h-full bg-white border-2 border-black">
                <div className="relative">
                  <div className="absolute top-2 left-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                      <span className="text-xs ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  {product.badge && (
                    <div className="absolute top-2 right-2">
                      <SketchBadge variant={product.badge === "New" ? "primary" : product.badge === "Sale" ? "danger" : "warning"}>
                        {product.badge}
                      </SketchBadge>
                    </div>
                  )}
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover mb-4 sketch-border"
                  />
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                      {product.name}
                    </h3>
                    <button className="transform hover:scale-110 transition-transform">
                      <Heart size={20} className="text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="mb-2 flex items-center gap-2">
                    <p className="text-xl font-bold text-blue-600">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-sm line-through text-gray-500">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                  
                  <p className="mb-4 text-gray-700">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    <SketchButton className="w-full transform rotate-0.5" onClick={addToCart}>
                      Add to Cart
                    </SketchButton>
                    <button className="text-blue-600 hover:text-blue-800 sketch-underline text-sm text-center">
                      Quick View
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-600 border-t border-dashed border-gray-300 pt-2">
                    <div className="flex items-center">
                      <Package size={14} className="mr-1" />
                      Free shipping
                    </div>
                    <div className="flex items-center">
                      <Truck size={14} className="mr-1" />
                      In stock
                    </div>
                  </div>
                </div>
              </SketchCard>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-white sketch-border transform -rotate-0.5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg" style={{ fontFamily: "'Shantell Sans', cursive" }}>Subscribe to our newsletter</h3>
              <p className="text-sm">Get the latest updates on new products and upcoming sales</p>
            </div>
            <div className="flex w-full md:w-auto">
              <SketchInput 
                placeholder="Your email address" 
                className="w-full md:w-64 transform rotate-0.5"
              />
              <SketchButton className="ml-2 transform -rotate-0.5">
                Subscribe
              </SketchButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharpieShop;
