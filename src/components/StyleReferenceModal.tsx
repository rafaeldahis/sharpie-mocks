
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface StyleReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyleReferenceModal = ({ isOpen, onClose }: StyleReferenceModalProps) => {
  const downloadStyleImage = () => {
    // Create a link element to download the image
    const link = document.createElement('a');
    link.href = '/sharpie-style-reference.png';
    link.download = 'sharpie-style-reference.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started!",
      description: "Style reference image is being downloaded",
      duration: 2000,
    });
  };

  const openImageInNewTab = () => {
    // Open the image in a new tab to view in full size
    window.open('/sharpie-style-reference.png', '_blank');
    
    toast({
      title: "Opening in new tab",
      description: "Style reference image opened in full size",
      duration: 2000,
    });
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
            {/* Add onClick to open in full size when clicked */}
            <img 
              src="/sharpie-style-reference.png" 
              alt="Sharpie Mocks Style Reference" 
              className="max-w-full h-auto border-2 border-black rounded-md sketch-border transform -rotate-0.5 cursor-pointer"
              onClick={openImageInNewTab}
              style={{ maxHeight: "60vh" }}
            />
            
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center w-full">
              <Button 
                className="bg-[#FFFF00] text-black border-2 border-black hover:bg-[#E6E600] transform hover:-translate-y-1 transition-transform"
                onClick={downloadStyleImage}
              >
                <Download className="mr-2 h-4 w-4" /> Download Image
              </Button>
              
              <Button 
                className="bg-blue-500 text-white border-2 border-black hover:bg-blue-600 transform hover:-translate-y-1 transition-transform"
                onClick={openImageInNewTab}
              >
                View Full Size
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
