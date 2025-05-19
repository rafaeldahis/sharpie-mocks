
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, LayoutDashboard, Star, Users, Zap, MessageSquare, Play, ChevronDown } from "lucide-react";
import { SketchButton, SketchCard, SketchBadge } from "@/components/marker";

const DoodleLaunch = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [showFAQ, setShowFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setShowFAQ(showFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Our 14-day free trial gives you full access to all DoodleLaunch features. No credit card required until you decide to subscribe."
    },
    {
      question: "Can I export my designs to other formats?",
      answer: "Yes! DoodleLaunch supports exports to PNG, SVG, PDF, and even animated GIF formats so you can use your designs anywhere."
    },
    {
      question: "Is DoodleLaunch suitable for professional work?",
      answer: "Absolutely! While we embrace imperfection, many professionals use DoodleLaunch for presentations, marketing materials, and website mockups."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals just starting out",
      features: ["5 design projects", "Basic shape library", "PNG exports", "Community support"],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For designers who need more power",
      features: ["Unlimited projects", "Full shape library", "All export formats", "Priority support", "Team sharing", "Version history"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$49",
      period: "/month",
      description: "Collaborate with your entire team",
      features: ["Everything in Pro", "5 team members", "Advanced collaboration", "Admin controls", "Custom templates", "API access"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      comment: "DoodleLaunch changed the way I present concepts to clients. The sketchy style makes feedback sessions more productive since designs don't look final.",
      avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=50&h=50&auto=format&fit=crop"
    },
    {
      name: "Mark Thompson",
      role: "Product Manager",
      comment: "Our team uses DoodleLaunch for all our early wireframing. It keeps the focus on functionality rather than pixels, which is exactly what we need.",
      avatar: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=50&h=50&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#C1E1C5] min-h-screen p-4">
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

        {/* Navigation */}
        <div className="mb-6 hidden md:flex justify-center">
          <nav className="bg-white border-2 border-black px-4 py-2 rounded-full sketch-border transform -rotate-0.5">
            <ul className="flex space-x-6">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <button 
                    className="px-3 py-1 font-medium hover:text-blue-600 transform hover:rotate-1 transition-transform"
                    onClick={() => setActiveTab(item.toLowerCase())}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <SketchButton variant="default" className="transform rotate-1 py-1">
                  Sign Up
                </SketchButton>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold sketch-border inline-block px-6 py-2 transform -rotate-1 bg-white text-black" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            DoodleLaunch
          </h1>
          <p className="text-xl mt-4 font-comic">A creative landing page for a design tool that embraces imperfection</p>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="transform -rotate-1">
              <div className="mb-2">
                <SketchBadge variant="primary" className="transform rotate-1">Just Launched</SketchBadge>
              </div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                Design with Freedom
              </h2>
              <p className="text-lg mb-4">
                DoodleLaunch is the perfect design tool for those who embrace the beauty of imperfection. Create unique, hand-drawn style designs without the constraints of perfection.
              </p>
              <p className="text-lg mb-6">
                Join thousands of designers who have freed themselves from the tyranny of straight lines and perfect circles.
              </p>
              <div className="flex gap-4 mb-6">
                <SketchButton className="transform rotate-0.5 bg-black text-white px-6 py-3">
                  Start Free Trial
                </SketchButton>
                <SketchButton variant="outline" className="transform -rotate-0.5 flex items-center gap-2">
                  <Play size={18} />
                  Watch Demo
                </SketchButton>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <div className="flex -space-x-2 mr-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border border-white sketch-border transform" style={{ transform: `rotate(${i % 3 - 1}deg)` }}></div>
                  ))}
                </div>
                <span>Join 2,000+ designers already using DoodleLaunch</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop" 
                alt="Design Tool Interface" 
                className="sketch-border transform rotate-1 border-2 border-black"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-2 border-2 border-black sketch-border transform -rotate-2">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-2 border-2 border-black sketch-border transform rotate-3">
                <p className="font-comic font-bold">So easy to use!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16" id="features">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Features that Inspire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Imperfect Lines", 
                desc: "Create beautifully imperfect designs with our hand-drawn line tools",
                icon: <LayoutDashboard size={30} className="transform rotate-2" />
              },
              { 
                title: "Sketch Library", 
                desc: "Access thousands of sketch elements for your designs",
                icon: <LayoutDashboard size={30} className="transform -rotate-1" />
              },
              { 
                title: "Collaborative", 
                desc: "Work with your team in real-time on your sketchy designs",
                icon: <Users size={30} className="transform rotate-1" />
              },
              { 
                title: "Lightning Fast", 
                desc: "Our optimized engine ensures smooth performance even with complex designs",
                icon: <Zap size={30} className="transform rotate-2" />
              },
              { 
                title: "Export Anywhere", 
                desc: "Export your designs in multiple formats including SVG, PNG, and PDF",
                icon: <ArrowLeft size={30} className="transform rotate-1" />
              },
              { 
                title: "Feedback Tools", 
                desc: "Gather and implement feedback directly within your designs",
                icon: <MessageSquare size={30} className="transform -rotate-1" />
              }
            ].map((feature, i) => (
              <SketchCard key={i} className="bg-white border-2 border-black transform transition-transform hover:scale-105 hover:rotate-0.5">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="mb-4 bg-[#C1E1C5] p-3 rounded-full sketch-border">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                    {feature.title}
                  </h3>
                  <p>{feature.desc}</p>
                </div>
              </SketchCard>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-20" id="pricing">
          <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-center mb-8">Choose the plan that's right for you</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`transform ${index === 1 ? '-rotate-1 scale-105' : 'rotate-1'}`}>
                <SketchCard className={`h-full bg-white border-2 border-black ${plan.popular ? 'border-[3px]' : ''}`}>
                  <div className="p-2 relative">
                    {plan.popular && (
                      <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-1 px-3 border-2 border-black sketch-border transform rotate-3">
                        <p className="font-bold">Most Popular</p>
                      </div>
                    )}
                    
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Shantell Sans', cursive" }}>
                        {plan.name}
                      </h3>
                      <div className="flex items-center justify-center">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <Check size={18} className="mr-2 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <SketchButton 
                      className={`w-full transform rotate-0.5 ${plan.popular ? 'bg-black text-white' : ''}`}
                    >
                      {plan.cta}
                    </SketchButton>
                  </div>
                </SketchCard>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20" id="testimonials">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {testimonials.map((testimonial, index) => (
              <SketchCard key={index} className="bg-white border-2 border-black transform rotate-1">
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden sketch-border mr-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.comment}"</p>
                  <div className="mt-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </SketchCard>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 mb-16" id="faq">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <SketchCard 
                key={index} 
                className="mb-4 bg-white border-2 border-black transform hover:rotate-0.5 cursor-pointer transition-transform"
                onClick={() => toggleFAQ(index)}
              >
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{faq.question}</h3>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform ${showFAQ === index ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                  {showFAQ === index && (
                    <div className="mt-3 pt-3 border-t border-dashed border-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </SketchCard>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 text-center">
          <SketchCard className="inline-block bg-white border-2 border-black p-6 transform -rotate-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>
              Join Our Newsletter
            </h3>
            <p className="mb-4">Get tips, tutorials, and special offers straight to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="sketch-input px-4 py-2 flex-grow"
              />
              <SketchButton className="transform rotate-0.5">
                Subscribe
              </SketchButton>
            </div>
          </SketchCard>
        </div>
      </div>
    </div>
  );
};

export default DoodleLaunch;
