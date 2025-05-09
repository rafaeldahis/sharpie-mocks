
import React, { useState } from 'react';
import { Menu, LayoutList, LayoutGrid, ChevronDown, ChevronUp, ArrowUp, ArrowDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';

export const NavigationLayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState<Record<string, boolean>>({
    'section1': false,
    'section2': false,
    'section3': false
  });
  const [isSticky, setIsSticky] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mock data
  const sideNavItems = ['Dashboard', 'Projects', 'Team', 'Calendar', 'Reports', 'Settings'];
  const bottomNavItems = ['Home', 'Search', 'Create', 'Messages', 'Profile'];
  const accordionSections = [
    { id: 'section1', title: 'How to use this component?', content: 'This component demonstrates a collapsible accordion panel that can be used for FAQs, settings, or long forms.' },
    { id: 'section2', title: 'Can I customize the styling?', content: 'Yes! You can modify the sketch-style CSS classes to match your application\'s design system.' },
    { id: 'section3', title: 'Is this responsive?', content: 'Absolutely! All components are designed with mobile-first principles and adapt to different screen sizes.' }
  ];
  const carouselItems = [
    { title: 'Amazing Design', author: 'Jane Smith', quote: 'This marker-style UI kit has transformed our product experience completely!' },
    { title: 'Easy to Use', author: 'John Miller', quote: 'Implementation was a breeze, and our customers love the friendly aesthetics.' },
    { title: 'Highly Customizable', author: 'Alex Wong', quote: 'We could easily adapt every component to match our brand guidelines.' },
  ];

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);
  const toggleAccordion = (id: string) => {
    setIsCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleStickyHeader = () => setIsSticky(!isSticky);
  const toggleViewMode = () => setViewMode(prev => prev === 'grid' ? 'list' : 'grid');

  const cards = [
    { id: 1, title: 'Card One', description: 'This is a vertical card with some sample content that demonstrates the card pattern.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
    { id: 2, title: 'Card Two', description: 'Another card with different content to show how these cards line up together.', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' },
    { id: 3, title: 'Card Three', description: 'A third card completes this simple demonstration of the card pattern component.', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7' }
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold sketch-heading mb-6">1. Navigation & Layout</h2>
      
      {/* Persistent Side Nav */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Persistent Side Nav / App-Shell</h3>
        <div className="flex border sketch-border overflow-hidden h-[400px]">
          <div className={cn(
            "sketch-sidebar transition-all duration-300 transform",
            isSideNavOpen ? "w-64" : "w-16"
          )}>
            <div className="p-4 flex justify-between items-center border-b sketch-border">
              <span className={isSideNavOpen ? "block" : "hidden"}>AppName</span>
              <button 
                onClick={toggleSideNav} 
                className="sketch-btn-icon"
              >
                <Menu size={16} />
              </button>
            </div>
            <div className="py-4">
              {sideNavItems.map((item, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 flex items-center gap-2 hover:bg-sketch-hover cursor-pointer"
                >
                  <div className="w-6 h-6 bg-sketch-midGrey rounded-md flex items-center justify-center">
                    <span className="text-xs text-white">{item[0]}</span>
                  </div>
                  {isSideNavOpen && <span>{item}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 p-4 bg-gray-100">
            <h4 className="text-lg font-semibold mb-2">Main Content Area</h4>
            <p>This is the main content area that adapts to the sidebar width.</p>
            <p className="mt-2">Try clicking the menu icon to expand/collapse the sidebar.</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation / Mobile Tab Bar */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Bottom Navigation / Mobile Tab Bar</h3>
        <div className="border sketch-border h-[400px] relative">
          <div className="p-4 h-full overflow-y-auto">
            <h4 className="text-lg font-semibold mb-2">Mobile Content Area</h4>
            <p>Scroll-able content area with a mobile tab bar fixed to the bottom.</p>
            <div className="h-[500px] flex items-center justify-center text-gray-400">
              Scrollable Content Area
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t sketch-border p-2">
            <div className="flex justify-around">
              {bottomNavItems.map((item, i) => (
                <button 
                  key={i} 
                  className={cn("flex flex-col items-center p-2 rounded-md", 
                    activeTab === i ? "text-sketch-accentBlue" : "text-gray-500")}
                  onClick={() => setActiveTab(i)}
                >
                  <div className="w-6 h-6 bg-current rounded-full opacity-20"></div>
                  <span className="text-xs mt-1">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Accordion / Collapsible Panels */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Accordion / Collapsible Panels</h3>
        <div className="border sketch-border p-4">
          <h4 className="text-lg font-semibold mb-4">Frequently Asked Questions</h4>
          <div className="space-y-2">
            {accordionSections.map((section) => (
              <Collapsible 
                key={section.id}
                open={isCollapsed[section.id]} 
                onOpenChange={() => toggleAccordion(section.id)}
                className="border rounded-md sketch-border overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                  {section.title}
                  {isCollapsed[section.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 border-t">
                  <p>{section.content}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sticky Header / Scrolling App-Bar */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Sticky Header / Scrolling App-Bar</h3>
        <div className="border sketch-border h-[300px] relative overflow-hidden">
          {isSticky && (
            <div className="sticky top-0 bg-white z-10 p-4 border-b sketch-border flex items-center justify-between">
              <h4 className="font-semibold">Sticky Header</h4>
              <div className="flex gap-2">
                <button className="sketch-btn-icon">
                  <span className="text-xs">Filter</span>
                </button>
                <button className="sketch-btn-icon">
                  <span className="text-xs">Sort</span>
                </button>
              </div>
            </div>
          )}
          <div className="p-4 h-full overflow-y-auto">
            <div className="mb-4 flex justify-between">
              <button 
                onClick={toggleStickyHeader}
                className="sketch-btn text-xs py-1"
              >
                {isSticky ? (
                  <span className="flex items-center gap-1"><ArrowUp size={14} /> Hide Header</span>
                ) : (
                  <span className="flex items-center gap-1"><ArrowDown size={14} /> Show Header</span>
                )}
              </button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="p-3 border sketch-border rounded-md">
                  <p>Scrollable content item {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Pattern */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Card Pattern (Vertical & Horizontal)</h3>
        
        <div className="flex justify-end mb-2">
          <button 
            onClick={toggleViewMode}
            className="sketch-btn flex items-center gap-1 text-xs"
          >
            {viewMode === 'grid' ? (
              <><LayoutList size={14} /> List View</>
            ) : (
              <><LayoutGrid size={14} /> Grid View</>
            )}
          </button>
        </div>
        
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="sketch-card flex flex-col">
                <div className="relative w-full h-40 mb-3">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img 
                      src={card.image}
                      alt={card.title} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </AspectRatio>
                </div>
                <h4 className="font-bold mb-2">{card.title}</h4>
                <p className="text-sm text-gray-600 flex-grow">{card.description}</p>
                <button className="sketch-btn mt-3 self-start">View Details</button>
              </div>
            ))}
          </div>
        )}
        
        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {cards.map((card) => (
              <div key={card.id} className="sketch-card flex gap-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={card.image}
                    alt={card.title} 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h4 className="font-bold mb-1">{card.title}</h4>
                  <p className="text-sm text-gray-600 flex-grow">{card.description}</p>
                  <button className="sketch-btn mt-2 self-start">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Carousel / Slider */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Carousel / Slider</h3>
        <div className="border sketch-border p-4">
          <Carousel className="w-full max-w-lg mx-auto">
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 text-center">
                    <blockquote className="text-lg italic mb-4">"{item.quote}"</blockquote>
                    <div className="font-bold">{item.author}</div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative static transform-none" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
