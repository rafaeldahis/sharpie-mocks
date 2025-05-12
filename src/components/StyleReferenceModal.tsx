
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
    // Create an anchor element
    const a = document.createElement('a');
    a.href = '/sharpie-style-reference.png';
    a.download = 'sharpie-style-reference.png';
    
    // Trigger a click on the anchor to start the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    
    toast({
      title: "Downloaded!",
      description: "Style reference image downloaded successfully",
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
            <img 
              src="/sharpie-style-reference.png" 
              alt="Sharpie Mocks Style Reference" 
              className="max-w-full h-auto border-2 border-black rounded-md sketch-border transform -rotate-0.5"
            />
            
            <Button 
              className="mt-4 bg-[#FFFF00] text-black border-2 border-black hover:bg-[#E6E600] transform hover:-translate-y-1 transition-transform"
              onClick={downloadStyleImage}
            >
              <Download className="mr-2 h-4 w-4" /> Download Style Reference
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StyleReferenceModal;
