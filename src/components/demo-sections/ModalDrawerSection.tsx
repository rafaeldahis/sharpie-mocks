
import React, { useState } from 'react';
import { SketchCard, SketchButton } from '../marker';

const ModalDrawerSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  return (
    <>
      <SketchCard title="Modals & Drawers" className="mb-6">
        <div className="space-y-4">
          <p>Click the buttons below to toggle the modal or drawer:</p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <button 
              className="bg-blue-500 text-white px-6 py-2 rounded uppercase font-semibold transform hover:scale-105 transition-transform border-2 border-black"
              onClick={() => setShowModal(true)}
            >
              SHOW MODAL DEMO
            </button>
            
            <button 
              className="bg-gray-400 text-white px-6 py-2 rounded uppercase font-semibold transform hover:scale-105 transition-transform border-2 border-black"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              TOGGLE DRAWER DEMO
            </button>
          </div>
        </div>
      </SketchCard>
      
      {/* Modal Demo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="sketch-modal">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold text-xl">Sketch Modal</h3>
              <button onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="mb-4">
              This is a modal dialog with a sketchy style!
            </div>
            <div className="flex justify-end">
              <SketchButton onClick={() => setShowModal(false)}>Close</SketchButton>
            </div>
          </div>
        </div>
      )}

      {/* Drawer Demo */}
      <div className={`sketch-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="flex justify-between mb-4">
          <h3 className="font-bold text-xl">Sketch Drawer</h3>
          <button onClick={() => setDrawerOpen(false)}>✕</button>
        </div>
        <div className="sketch-sidebar">
          <a href="#" className="sketch-sidebar-item active">Home</a>
          <a href="#" className="sketch-sidebar-item">Products</a>
          <a href="#" className="sketch-sidebar-item">Services</a>
          <a href="#" className="sketch-sidebar-item">About</a>
          <a href="#" className="sketch-sidebar-item">Contact</a>
        </div>
      </div>
    </>
  );
};

export default ModalDrawerSection;
