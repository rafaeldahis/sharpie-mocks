
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import SketchCard from "@/components/marker/SketchCard";
import { SketchButton, SketchBadge } from "@/components/marker";

const SharpieShop = () => {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Hand-drawn Notebook",
      price: "$14.99",
      description: "A unique notebook with sketched lines and doodles",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&auto=format&fit=crop",
      badge: "Popular"
    },
    {
      id: 2,
      name: "Marker Set Pro",
      price: "$24.99",
      description: "Professional set of sketch markers in various colors",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&auto=format&fit=crop",
      badge: "New"
    },
    {
      id: 3,
      name: "Doodle Canvas",
      price: "$19.99",
      description: "Pre-sketched canvas ready for your creative touch",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&auto=format&fit=crop",
      badge: ""
    }
  ];

  return (
    <div className="bg-[#FFCF8B] min-h-screen p-4">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center">
          <Link 
            to="/showcase" 
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 sketch-underline"
          >
            <ArrowLeft size={20} className="transform rotate-1" />
            Back to Showcase
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-white text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            SharpieShop
          </h1>
          <p className="text-xl mt-4 font-comic">An e-commerce platform with a hand-drawn aesthetic</p>
        </div>

        <div className="mb-8 p-4 bg-white sketch-border transform -rotate-0.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingCart size={24} className="mr-2 transform rotate-2" />
              <span className="text-lg font-bold">Your Cart (0)</span>
            </div>
            <SketchButton className="transform rotate-1">
              Checkout
            </SketchButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="transform transition-transform hover:-rotate-1 hover:scale-105">
              <SketchCard className="h-full bg-white border-2 border-black">
                <div className="relative">
                  {product.badge && (
                    <div className="absolute top-2 right-2">
                      <SketchBadge variant={product.badge === "New" ? "primary" : "warning"}>
                        {product.badge}
                      </SketchBadge>
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover mb-4 sketch-border"
                  />
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold mb-2 text-blue-600">
                    {product.price}
                  </p>
                  <p className="mb-4">
                    {product.description}
                  </p>
                  <SketchButton className="w-full transform rotate-0.5">
                    Add to Cart
                  </SketchButton>
                </div>
              </SketchCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharpieShop;
