
import React, { useState } from 'react';
import { Bell, X, Check, MoreHorizontal, Trash, Loader } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const FeedbackOverlays = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastCount, setToastCount] = useState(0);
  const { toast } = useToast();
  
  const showToast = () => {
    setToastCount(prev => prev + 1);
    toast({
      title: `Toast Notification ${toastCount + 1}`,
      description: "This is a toast notification example",
      variant: toastCount % 3 === 0 ? "destructive" : "default",
    });
  };

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(prev => !prev);
  };

  const togglePopover = () => {
    setIsPopoverOpen(prev => !prev);
  };

  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold sketch-heading mb-6">4. Feedback & Overlays</h2>
      
      {/* Banner / Announcement Bar */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Banner / Announcement Bar</h3>
        <div className="space-y-4">
          <div className="sketch-warning-banner">
            <Bell size={16} className="mr-2" />
            <div className="flex-grow">
              <p>⚡ Flash Sale! Get 50% off all Sketch UI components for the next 24 hours!</p>
            </div>
            <button className="sketch-btn-icon ml-2">
              <X size={14} />
            </button>
          </div>
          
          <div className="sketch-success-banner">
            <Check size={16} className="mr-2" />
            <div className="flex-grow">
              <p>Your file has been successfully uploaded.</p>
            </div>
            <button className="sketch-btn-icon ml-2">
              <X size={14} />
            </button>
          </div>
          
          <div className="sketch-error-banner">
            <X size={16} className="mr-2" />
            <div className="flex-grow">
              <p>There was an error processing your request. Please try again.</p>
            </div>
            <button className="sketch-btn-icon ml-2">
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Confirmation Dialog */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Confirmation Dialog</h3>
        <div className="border sketch-border p-4">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive" className="sketch-btn bg-red-500">
                <Trash size={16} className="mr-1" /> Delete Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sketch-modal">
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-gray-500 mb-4">
                  Please type "delete" to confirm:
                </p>
                <input 
                  type="text" 
                  className="sketch-input w-full"
                  placeholder="Type delete to confirm"
                />
              </div>
              <DialogFooter className="flex space-x-4">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <p className="text-sm text-gray-500 mt-4">
            Click the button above to open the confirmation dialog.
          </p>
        </div>
      </div>
      
      {/* Bottom Sheet */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Bottom-Sheet</h3>
        <div className="border sketch-border p-4">
          <Button className="sketch-btn" onClick={toggleBottomSheet}>
            Open Bottom Sheet
          </Button>
          
          {/* Bottom Sheet Component */}
          <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isBottomSheetOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleBottomSheet}>
            <div 
              className={`fixed bottom-0 left-0 right-0 bg-white transform transition-transform duration-300 sketch-border border-t rounded-t-lg ${isBottomSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center py-2">
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-4">Share This Post</h4>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {['Twitter', 'Facebook', 'LinkedIn', 'Email'].map((platform, i) => (
                    <button key={i} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        <span className="text-lg">{platform[0]}</span>
                      </div>
                      <span className="text-xs">{platform}</span>
                    </button>
                  ))}
                </div>
                <div className="sketch-input flex mb-4">
                  <input 
                    type="text" 
                    value="https://example.com/share/123456" 
                    readOnly
                    className="flex-grow bg-transparent p-2 focus:outline-none"
                  />
                  <button className="sketch-btn bg-blue-500 text-white px-3 py-1 text-sm">
                    Copy
                  </button>
                </div>
                <button className="sketch-btn w-full" onClick={toggleBottomSheet}>
                  Close
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Click the button above to open the bottom sheet.
          </p>
        </div>
      </div>
      
      {/* Popover / Contextual Menu */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Popover / Contextual Menu</h3>
        <div className="border sketch-border p-4">
          <div className="relative inline-block">
            <Button onClick={togglePopover} className="sketch-btn-icon">
              <MoreHorizontal size={16} />
            </Button>
            
            {isPopoverOpen && (
              <div className="absolute z-10 w-48 mt-2 bg-white sketch-border border rounded-md shadow-lg right-0">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Edit</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Duplicate</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Share</a>
                  <a href="#" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Delete</a>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Click the dots to show the contextual menu.
          </p>
        </div>
      </div>
      
      {/* Snackbar / Toast */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Snackbar Queue / Toast Manager</h3>
        <div className="border sketch-border p-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={showToast} className="sketch-btn">
              Show Toast Notification
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Click the button above to queue multiple toasts.
            Every third toast will be shown in a "destructive" variant.
          </p>
        </div>
      </div>
      
      {/* Skeleton Loaders */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Skeleton Loaders</h3>
        <div className="border sketch-border p-4">
          <div className="mb-6">
            <h4 className="font-medium mb-2">Card Skeleton</h4>
            <div className="sketch-card flex flex-col animate-pulse">
              <div className="bg-gray-200 h-40 rounded-md mb-3"></div>
              <div className="bg-gray-200 h-6 w-3/4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 w-full rounded mb-1"></div>
              <div className="bg-gray-200 h-4 w-5/6 rounded mb-3"></div>
              <div className="bg-gray-200 h-8 w-1/3 rounded"></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Table Skeleton</h4>
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-3"></div>
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-12 bg-gray-200 rounded mb-2"></div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex items-center">
            <Loader size={20} className="animate-spin mr-2" />
            <span>Loading content...</span>
          </div>
        </div>
      </div>
    </section>
  );
};
