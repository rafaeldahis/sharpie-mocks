
import React, { useState } from 'react';
import { SketchCard, SketchButton } from '../marker';
import { useIsMobile } from '../../hooks/use-mobile';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from '../ui/drawer';

const ModalDrawerSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { isMobile, screenSize } = useIsMobile();
  
  return (
    <>
      <SketchCard title="Modals & Drawers" className="mb-6">
        <div className="space-y-4">
          <p className="text-xs xs:text-sm sm:text-base mb-2">Click the buttons below to toggle the modal or drawer:</p>
          
          <div className="grid grid-cols-1 gap-3 xs:gap-4">
            <button 
              className="w-full bg-blue-500 text-white px-4 py-2 rounded uppercase font-semibold transform hover:scale-105 transition-transform border-2 border-black sketch-border"
              onClick={() => setShowModal(true)}
            >
              SHOW MODAL DEMO
            </button>
            
            {isMobile ? (
              <Drawer>
                <DrawerTrigger asChild>
                  <button 
                    className="w-full bg-gray-400 text-white px-4 py-2 rounded uppercase font-semibold transform hover:scale-105 transition-transform border-2 border-black sketch-border"
                  >
                    OPEN BOTTOM DRAWER
                  </button>
                </DrawerTrigger>
                <DrawerContent className="sketch-border border-t-2 border-black">
                  <DrawerHeader>
                    <DrawerTitle className="font-comic text-xl">Sketch Drawer</DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4 pt-0">
                    <div className="sketch-sidebar">
                      <a href="#" className="sketch-sidebar-item active block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Home</a>
                      <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Products</a>
                      <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Services</a>
                      <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">About</a>
                      <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Contact</a>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <Sheet>
                <SheetTrigger asChild>
                  <button 
                    className="w-full bg-gray-400 text-white px-4 py-2 rounded uppercase font-semibold transform hover:scale-105 transition-transform border-2 border-black sketch-border"
                  >
                    OPEN SIDE DRAWER
                  </button>
                </SheetTrigger>
                <SheetContent className="sketch-border border-l-2 border-black">
                  <SheetHeader>
                    <SheetTitle className="font-comic text-xl">Sketch Drawer</SheetTitle>
                  </SheetHeader>
                  <div className="sketch-sidebar mt-4">
                    <a href="#" className="sketch-sidebar-item active block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Home</a>
                    <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Products</a>
                    <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Services</a>
                    <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">About</a>
                    <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Contact</a>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </SketchCard>
      
      {/* Modal Demo - Using custom modal instead of shadcn Dialog for sketch styling */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="sketch-modal bg-white p-4 w-full max-w-md mx-auto rounded-md sketch-border border-2 border-black animate-in fade-in-0 zoom-in-95">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-lg sm:text-xl">Sketch Modal</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-lg sm:text-xl font-bold"
              >✕</button>
            </div>
            <div className="mb-6 text-sm sm:text-base">
              This is a modal dialog with a sketchy style!
            </div>
            <div className="flex justify-end">
              <SketchButton onClick={() => setShowModal(false)}>Close</SketchButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDrawerSection;
