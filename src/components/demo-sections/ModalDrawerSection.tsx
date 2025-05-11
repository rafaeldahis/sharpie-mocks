
import React, { useState } from 'react';
import { SketchCard, SketchButton } from '../marker';
import { useIsMobile } from '../../hooks/use-mobile';

const ModalDrawerSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useIsMobile();
  
  return (
    <>
      <SketchCard title="Modals & Drawers" className="mb-6">
        <div className="space-y-4">
          <p>Click the buttons below to toggle the modal or drawer:</p>
          
          <div className="flex flex-col gap-4 mt-4">
            <button 
              className="w-full bg-blue-500 text-white px-4 py-3 rounded uppercase font-semibold transform hover:scale-105 transition-transform border-2 border-black sketch-border"
              onClick={() => setShowModal(true)}
            >
              SHOW MODAL DEMO
            </button>
            
            <button 
              className="w-full bg-gray-400 text-white px-4 py-3 rounded uppercase font-semibold transform hover:scale-105 transition-transform border-2 border-black sketch-border"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              TOGGLE DRAWER DEMO
            </button>
          </div>
        </div>
      </SketchCard>
      
      {/* Modal Demo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="sketch-modal bg-white p-4 w-full max-w-md mx-auto rounded-md sketch-border border-2 border-black">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-xl">Sketch Modal</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-xl font-bold"
              >✕</button>
            </div>
            <div className="mb-6">
              This is a modal dialog with a sketchy style!
            </div>
            <div className="flex justify-end">
              <SketchButton onClick={() => setShowModal(false)}>Close</SketchButton>
            </div>
          </div>
        </div>
      )}

      {/* Drawer Demo */}
      <div className={`sketch-drawer fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white p-4 shadow-lg sketch-border border-l-2 border-black z-50 transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-xl">Sketch Drawer</h3>
          <button 
            onClick={() => setDrawerOpen(false)}
            className="text-xl font-bold"
          >✕</button>
        </div>
        <div className="sketch-sidebar">
          <a href="#" className="sketch-sidebar-item active block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Home</a>
          <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Products</a>
          <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Services</a>
          <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">About</a>
          <a href="#" className="sketch-sidebar-item block py-2 px-3 border-b border-gray-200 hover:bg-gray-100">Contact</a>
        </div>
      </div>
      
      {/* Backdrop for drawer */}
      {drawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default ModalDrawerSection;
