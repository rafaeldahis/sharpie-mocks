
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  SketchCard,
  SketchBadge,
  SketchButton,
  SketchToggle,
  SketchProgressBar,
  SketchNotificationBadge,
  SketchTable,
  SketchTag,
  SketchDropdown,
  SketchPagination,
  SketchInput,
  SketchRadio,
  SketchCheckbox,
  SketchTooltip,
  SketchSocialCard,
  SketchTestimonialCard,
  SketchPricingTable,
  SketchTimeline,
  SketchSteps
} from "@/components/marker";

const Random = () => {
  return (
    <div className="container mx-auto p-4 pb-20">
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
        <div className="inline-block transform -rotate-2 bg-[#9b87f5] text-white px-8 py-3 border-2 border-black shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Shantell Sans', cursive" }}>
            Random
          </h1>
        </div>
        <p className="text-lg mt-4">A showcase of UI elements in a bento-box style layout</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Buttons Section */}
        <SketchCard className="border-2 border-black" title="Buttons">
          <div className="flex flex-wrap gap-3">
            <SketchButton variant="primary">Primary</SketchButton>
            <SketchButton variant="secondary">Secondary</SketchButton>
            <SketchButton variant="outline">Outline</SketchButton>
            <SketchButton variant="delete">Delete</SketchButton>
            <SketchButton disabled>Disabled</SketchButton>
          </div>
        </SketchCard>
        
        {/* Form Controls */}
        <SketchCard className="border-2 border-black" title="Form Controls">
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Text input</label>
              <SketchInput placeholder="Enter some text..." />
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block mb-1">Checkbox</label>
                <SketchCheckbox label="Check me" />
              </div>
              <div>
                <label className="block mb-1">Radio</label>
                <div className="flex gap-2">
                  <SketchRadio name="radio" label="Option 1" checked />
                  <SketchRadio name="radio" label="Option 2" />
                </div>
              </div>
            </div>
          </div>
        </SketchCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Badges and Tags */}
        <SketchCard className="border-2 border-black" title="Badges & Tags">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <SketchBadge variant="primary">Primary</SketchBadge>
              <SketchBadge variant="success">Success</SketchBadge>
              <SketchBadge variant="warning">Warning</SketchBadge>
              <SketchBadge variant="danger">Danger</SketchBadge>
            </div>
            <div className="flex flex-wrap gap-2">
              <SketchTag label="Design" />
              <SketchTag label="UI/UX" />
              <SketchTag label="Sketch" />
            </div>
          </div>
        </SketchCard>
        
        {/* Progress */}
        <SketchCard className="border-2 border-black" title="Progress">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Progress 25%</span>
                <span>25%</span>
              </div>
              <SketchProgressBar value={25} color="#2179FF" />
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Progress 65%</span>
                <span>65%</span>
              </div>
              <SketchProgressBar value={65} color="#33CC66" />
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Progress 90%</span>
                <span>90%</span>
              </div>
              <SketchProgressBar value={90} color="#FF5733" />
            </div>
          </div>
        </SketchCard>
        
        {/* Toggles */}
        <SketchCard className="border-2 border-black" title="Toggles & Notifications">
          <div className="space-y-6">
            <div className="flex items-center justify-around">
              <div className="flex items-center gap-2">
                <SketchToggle defaultChecked={true} />
                <span>On</span>
              </div>
              <div className="flex items-center gap-2">
                <SketchToggle defaultChecked={false} />
                <span>Off</span>
              </div>
            </div>
            <div className="flex justify-around pt-4">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <SketchNotificationBadge count={3} position="top-right" color="red" />
              </div>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9V5a2 2 0 0 1 2-2h3.19M15 5h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.99a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h.01" />
                  <path d="M7 16.5 10 19l7-7" />
                  <path d="M8.5 11.5 10 13l7-7" />
                </svg>
                <SketchNotificationBadge count={5} position="top-right" color="blue" />
              </div>
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <SketchNotificationBadge count={2} position="top-right" color="green" />
              </div>
            </div>
          </div>
        </SketchCard>
      </div>
      
      {/* Steps and Timeline */}
      <div className="mb-12">
        <SketchCard className="border-2 border-black" title="Steps Process">
          <SketchSteps 
            steps={[
              { label: "Cart", status: "completed" },
              { label: "Shipping", status: "active" },
              { label: "Payment", status: "upcoming" },
              { label: "Confirm", status: "upcoming" }
            ]} 
          />
        </SketchCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Timeline */}
        <SketchCard className="border-2 border-black" title="Timeline">
          <SketchTimeline 
            items={[
              { 
                title: "Project Started", 
                description: "Kickoff meeting with team",
                date: "March 1, 2025",
                icon: "✓"
              },
              { 
                title: "Design Phase", 
                description: "Creating wireframes & mockups",
                date: "March 15, 2025",
                icon: "✓"
              },
              { 
                title: "Development", 
                description: "Building the application",
                date: "April 1, 2025",
                icon: "⚒️"
              }
            ]}
          />
        </SketchCard>
        
        {/* Social Card */}
        <SketchCard className="border-2 border-black" title="Social Card">
          <SketchSocialCard 
            avatar="JS"
            name="Jane Smith"
            time="3 hours ago"
            content="Just finished my sketchy UI design system! I love how expressive and playful it feels. Perfect for creative projects. #DesignSystem #UI #Sketch"
            likes={42}
            comments={7}
            shares={3}
          />
        </SketchCard>
      </div>
      
      {/* Pricing Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Shantell Sans', cursive" }}>Pricing Options</h2>
        <SketchPricingTable 
          tiers={[
            {
              name: "Basic",
              price: "$9",
              description: "For individuals and small projects",
              features: ["Up to 5 projects", "Basic templates", "Community support"],
              highlighted: false,
              buttonText: "Start Free Trial"
            },
            {
              name: "Pro",
              price: "$29",
              description: "For professionals and teams",
              features: ["Unlimited projects", "Premium templates", "Priority support", "Team collaboration", "Advanced analytics"],
              highlighted: true,
              buttonText: "Go Pro"
            },
            {
              name: "Enterprise",
              price: "$99",
              description: "For large organizations",
              features: ["Everything in Pro", "Dedicated support", "Custom integrations", "SLA guarantee", "User management"],
              highlighted: false,
              buttonText: "Contact Sales"
            }
          ]}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial Cards */}
        <SketchTestimonialCard 
          quote="This design system brings so much personality to our application! Our users love it."
          author="Alex Johnson"
          role="Product Designer"
          rating={5}
          avatarUrl=""
        />
        <SketchTestimonialCard 
          quote="Perfect balance between fun and functionality. Very easy to implement."
          author="Sarah Miller"
          role="Front-end Developer"
          rating={4}
          avatarUrl=""
        />
        <SketchTestimonialCard 
          quote="Our marketing team was looking for something unique, and this delivered perfectly!"
          author="Michael Chen"
          role="Marketing Director"
          rating={5}
          avatarUrl=""
        />
      </div>
    </div>
  );
};

export default Random;
