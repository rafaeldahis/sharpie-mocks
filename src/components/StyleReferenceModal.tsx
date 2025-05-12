
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Download, Image, Maximize } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface StyleReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Import the base64 image directly from the public file
// This is the first part of the base64 data in the PNG file
const BASE64_PREFIX = "data:image/png;base64,";

const StyleReferenceModal = ({ isOpen, onClose }: StyleReferenceModalProps) => {
  // Get the base64 content from the file that's already in the project
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Function to download the image using the base64 data
  const downloadStyleImage = () => {
    try {
      // Create a link with the base64 data
      const link = document.createElement('a');
      // Get the image element's src which contains the base64 data
      const imgElement = document.getElementById('style-reference-img') as HTMLImageElement;
      
      if (!imgElement || !imgElement.src) {
        throw new Error("Image not loaded properly");
      }
      
      link.href = imgElement.src;
      link.download = 'sharpie-style-reference.png';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download started!",
        description: "Style reference image is being downloaded",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was an error downloading the image. Please try again.",
        duration: 3000,
      });
      console.error("Download error:", error);
    }
  };

  // Function to view the image in a new tab
  const openImageInNewTab = () => {
    try {
      const imgElement = document.getElementById('style-reference-img') as HTMLImageElement;
      
      if (!imgElement || !imgElement.src) {
        throw new Error("Image not loaded properly");
      }
      
      // Open the base64 image in a new tab
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(`
          <html>
            <head>
              <title>Sharpie Style Reference</title>
              <style>
                body { margin: 0; background: #f5f5f5; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                img { max-width: 100%; height: auto; }
              </style>
            </head>
            <body>
              <img src="${imgElement.src}" alt="Sharpie Mocks Style Reference" />
            </body>
          </html>
        `);
        newTab.document.close();
      } else {
        throw new Error("Could not open new tab. Your browser might be blocking popups.");
      }
      
      toast({
        title: "Opening in new tab",
        description: "Style reference image opened in full size",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Error opening image",
        description: error instanceof Error ? error.message : "Failed to open image in new tab",
        duration: 3000,
      });
      console.error("Open in new tab error:", error);
    }
  };

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
          <div className="flex flex-col items-center">
            <div className="relative w-full flex justify-center">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
                  <div className="flex flex-col items-center text-gray-500">
                    <Image className="h-12 w-12 animate-pulse" />
                    <p className="mt-2">Loading image...</p>
                  </div>
                </div>
              )}
              
              <img 
                id="style-reference-img"
                src="/sharpie-style-reference.png"
                alt="Sharpie Mocks Style Reference" 
                className={`max-w-full h-auto border-2 border-black rounded-md sketch-border transform -rotate-0.5 cursor-pointer ${imageLoaded ? 'block' : 'invisible'}`}
                onClick={openImageInNewTab}
                style={{ maxHeight: "60vh" }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  toast({
                    title: "Image failed to load",
                    description: "The style reference image couldn't be loaded. Please try again later.",
                    duration: 3000,
                  });
                }}
              />
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center w-full">
              <Button 
                className="bg-[#FFFF00] text-black border-2 border-black hover:bg-[#E6E600] transform hover:-translate-y-1 transition-transform"
                onClick={downloadStyleImage}
                disabled={!imageLoaded}
              >
                <Download className="mr-2 h-4 w-4" /> Download Image
              </Button>
              
              <Button 
                className="bg-blue-500 text-white border-2 border-black hover:bg-blue-600 transform hover:-translate-y-1 transition-transform"
                onClick={openImageInNewTab}
                disabled={!imageLoaded}
              >
                <Maximize className="mr-2 h-4 w-4" /> View Full Size
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-3 text-center">
              Click the image to view in full size, or use the buttons above to download or open in a new tab
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StyleReferenceModal;
