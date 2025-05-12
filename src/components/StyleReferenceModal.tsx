
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface StyleReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyleReferenceModal = ({ isOpen, onClose }: StyleReferenceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle className="marker-heading text-2xl">Sharpie Mocks Style Reference</DialogTitle>
          <DialogDescription>
            Visual reference for the sketch-style design system
          </DialogDescription>
        </DialogHeader>
        
        <div className="overflow-auto max-h-[80vh]">
          <div className="bg-white p-6 rounded-md border border-gray-200 sketch-border">
            <h2 className="text-xl font-bold marker-heading mb-4">Typography</h2>
            <div className="space-y-4">
              <div className="sketch-underline pb-1">
                <h1 className="text-4xl" style={{ fontFamily: "'Shantell Sans', cursive" }}>Headline (Shantell Sans)</h1>
              </div>
              <div className="sketch-underline pb-1">
                <h2 className="text-2xl font-comic">Subheading (Comic Neue)</h2>
              </div>
              <div className="sketch-underline pb-1">
                <p className="text-lg">Body Text (System Font)</p>
              </div>
            </div>
            
            <h2 className="text-xl font-bold marker-heading mt-8 mb-4">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#FFFF00] text-black text-center rounded border border-black transform -rotate-1">Primary Yellow</div>
              <div className="p-4 bg-black text-white text-center rounded border border-black transform rotate-1">Marker Black</div>
              <div className="p-4 bg-[#F6F6F7] text-black text-center rounded border border-black transform -rotate-0.5">Background Gray</div>
              <div className="p-4 bg-white text-black text-center rounded border border-black transform rotate-0.5">White</div>
            </div>
            
            <h2 className="text-xl font-bold marker-heading mt-8 mb-4">Component Styling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-black rounded transform -rotate-1 bg-white">
                <h3 className="font-bold mb-2">Button Styles</h3>
                <button className="bg-[#FFFF00] px-4 py-2 rounded border-2 border-black transform hover:-translate-y-1 transition-transform">Primary Button</button>
                <button className="bg-white px-4 py-2 rounded border-2 border-black ml-2 transform hover:-translate-y-1 transition-transform">Secondary Button</button>
              </div>
              
              <div className="p-4 border border-black rounded transform rotate-1 bg-white">
                <h3 className="font-bold mb-2">Input Fields</h3>
                <input type="text" className="border-2 border-black p-2 rounded transform -rotate-0.5 w-full" placeholder="Sketch-style input..." />
              </div>
              
              <div className="p-4 border border-black rounded transform -rotate-0.5 bg-white">
                <h3 className="font-bold mb-2">Cards & Containers</h3>
                <div className="p-3 border-2 border-black rounded bg-[#F6F6F7] transform rotate-1">
                  <p className="font-comic">Content inside a sketch card with wobbly borders and slight rotation</p>
                </div>
              </div>
              
              <div className="p-4 border border-black rounded transform rotate-0.5 bg-white">
                <h3 className="font-bold mb-2">Icons & Decorations</h3>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center transform -rotate-3">✓</div>
                  <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center transform rotate-3">✕</div>
                  <div className="w-8 h-8 border-2 border-black flex items-center justify-center transform -rotate-2">→</div>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-bold marker-heading mt-8 mb-4">Implementation Notes</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the <code>sketch-border</code> and <code>sketch-underline</code> utility classes</li>
              <li>Apply small rotation transforms (<code>rotate-0.5</code> to <code>rotate-1</code>) for the hand-drawn feel</li>
              <li>Utilize the Comic Neue and Shantell Sans fonts for sketch-style typography</li>
              <li>Implement subtle hover animations that enhance the hand-drawn aesthetic</li>
              <li>Use black borders with slightly rounded corners for most containers</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StyleReferenceModal;
