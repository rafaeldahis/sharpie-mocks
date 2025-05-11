
import React, { useState } from 'react';
import { Plus, RefreshCcw, Trash, Mail, Archive, Star } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

export const MobileExtras = () => {
  const [isPullRefreshing, setIsPullRefreshing] = useState(false);
  const [listItems, setListItems] = useState([
    { id: 1, title: 'Meeting notes', description: 'Discussion about new features', isStarred: false },
    { id: 2, title: 'Project plan', description: 'Timeline and milestones for Q2', isStarred: true },
    { id: 3, title: 'Design feedback', description: 'Revisions for homepage redesign', isStarred: false },
    { id: 4, title: 'Team schedule', description: 'Upcoming availability for team members', isStarred: false },
  ]);
  const [swipedItem, setSwipedItem] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  const handleRefresh = () => {
    setIsPullRefreshing(true);
    setTimeout(() => {
      setIsPullRefreshing(false);
    }, 2000);
  };
  
  const toggleStarItem = (id: number) => {
    setListItems(items => 
      items.map(item => 
        item.id === id ? { ...item, isStarred: !item.isStarred } : item
      )
    );
    setSwipedItem(null);
  };
  
  const deleteItem = (id: number) => {
    setListItems(items => items.filter(item => item.id !== id));
  };
  
  const archiveItem = (id: number) => {
    // In a real app, this would move the item to an archive
    deleteItem(id);
  };

  const handleSwipe = (id: number) => {
    setSwipedItem(swipedItem === id ? null : id);
  };

  // Icon size based on mobile state
  const iconSize = isMobile ? 16 : 24;
  const smallIconSize = isMobile ? 14 : 20;
  const actionButtonWidth = isMobile ? 40 : 50;

  return (
    <section className="space-y-8 sm:space-y-12">
      <h2 className="text-xl sm:text-2xl font-bold sketch-heading mb-4 sm:mb-6">6. Mobile-First Extras</h2>
      
      {/* Floating Action Button */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold sketch-heading">Floating Action Button (FAB)</h3>
        <div className="border sketch-border h-56 sm:h-72 relative">
          <div className="p-3 sm:p-4">
            <h4 className="font-medium mb-2 text-sm sm:text-base">Content Area</h4>
            <p className="text-xs sm:text-sm text-gray-500">
              This demonstrates a common mobile UI pattern where the primary action is accessible via a floating action button.
            </p>
          </div>
          
          {/* Floating Action Button */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
              <Plus size={iconSize} />
            </button>
          </div>
          
          {/* Speed dial menu (shows on hover/focus for demo) */}
          <div className="absolute bottom-20 sm:bottom-24 right-4 sm:right-6 space-y-2 sm:space-y-3 opacity-0 hover:opacity-100 focus-within:opacity-100 group-hover:opacity-100">
            <div className="flex items-center">
              <span className="mr-1 sm:mr-2 bg-white py-1 px-2 sm:px-3 rounded-full text-[10px] sm:text-xs shadow">New Message</span>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow">
                <Mail size={smallIconSize} />
              </button>
            </div>
            <div className="flex items-center">
              <span className="mr-1 sm:mr-2 bg-white py-1 px-2 sm:px-3 rounded-full text-[10px] sm:text-xs shadow">New Task</span>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500 text-white flex items-center justify-center shadow">
                <span className="text-base sm:text-lg">✓</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pull-to-Refresh */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold sketch-heading">Pull-to-Refresh Indicator</h3>
        <div className="border sketch-border overflow-hidden">
          <div className="p-3 sm:p-4 flex justify-between items-center border-b sketch-border">
            <h4 className="font-medium text-sm sm:text-base">Feed</h4>
            <button 
              onClick={handleRefresh}
              className="sketch-btn-icon"
              disabled={isPullRefreshing}
            >
              <RefreshCcw size={smallIconSize} className={isPullRefreshing ? "animate-spin" : ""} />
            </button>
          </div>
          
          <div className="relative">
            {/* Pull to refresh indicator */}
            <div 
              className={`flex justify-center items-center p-2 sm:p-3 bg-gray-50 transition-transform ${
                isPullRefreshing ? 'transform translate-y-0' : 'transform -translate-y-full'
              }`}
            >
              <RefreshCcw size={smallIconSize} className="animate-spin mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">Refreshing...</span>
            </div>
            
            <div className="p-3 sm:p-4">
              {isPullRefreshing ? (
                <div className="space-y-3 sm:space-y-4 animate-pulse">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="h-12 sm:h-16 bg-gray-100 rounded"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border sketch-border p-2 sm:p-3 rounded">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100"></div>
                        <div>
                          <div className="font-medium text-sm sm:text-base">User {item}</div>
                          <div className="text-xs sm:text-sm text-gray-500">Posted {item} hour{item !== 1 ? 's' : ''} ago</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
                In a real mobile app, you would pull down to refresh.
                <br />
                Click the refresh button to simulate this behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Swipeable List Actions */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold sketch-heading">Swipeable List Actions</h3>
        <div className="border sketch-border overflow-hidden">
          <div className="p-3 sm:p-4 border-b sketch-border">
            <h4 className="font-medium text-sm sm:text-base">Notes</h4>
          </div>
          
          <div>
            {listItems.map((item) => (
              <div key={item.id} className="relative overflow-hidden border-b sketch-border">
                {/* Main Item */}
                <div 
                  className="bg-white p-3 sm:p-4 transform transition-transform"
                  style={{
                    transform: swipedItem === item.id ? `translateX(-${isMobile ? 120 : 150}px)` : 'translateX(0)'
                  }}
                  onClick={() => swipedItem === item.id && setSwipedItem(null)}
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    {item.isStarred && (
                      <Star size={smallIconSize} className="text-yellow-500" />
                    )}
                    <div className="flex-grow">
                      <div className="font-medium text-sm sm:text-base">{item.title}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{item.description}</div>
                    </div>
                    <button 
                      className="sketch-btn-icon px-1 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSwipe(item.id);
                      }}
                    >
                      <span>Swipe</span>
                    </button>
                  </div>
                </div>
                
                {/* Action buttons that appear on swipe */}
                <div 
                  className="absolute right-0 top-0 bottom-0 flex h-full"
                >
                  <button 
                    className={`w-[${actionButtonWidth}px] bg-yellow-500 text-white flex items-center justify-center`}
                    onClick={() => toggleStarItem(item.id)}
                    style={{ width: actionButtonWidth + 'px' }}
                  >
                    <Star size={smallIconSize} />
                  </button>
                  <button 
                    className={`w-[${actionButtonWidth}px] bg-blue-500 text-white flex items-center justify-center`}
                    onClick={() => archiveItem(item.id)}
                    style={{ width: actionButtonWidth + 'px' }}
                  >
                    <Archive size={smallIconSize} />
                  </button>
                  <button 
                    className={`w-[${actionButtonWidth}px] bg-red-500 text-white flex items-center justify-center`}
                    onClick={() => deleteItem(item.id)}
                    style={{ width: actionButtonWidth + 'px' }}
                  >
                    <Trash size={smallIconSize} />
                  </button>
                </div>
              </div>
            ))}
            
            {listItems.length === 0 && (
              <div className="p-4 sm:p-6 text-center">
                <p className="text-sm sm:text-base">No items left. All items have been deleted.</p>
                <button 
                  className="sketch-btn mt-3 sm:mt-4 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
                  onClick={() => setListItems([
                    { id: 1, title: 'Meeting notes', description: 'Discussion about new features', isStarred: false },
                    { id: 2, title: 'Project plan', description: 'Timeline and milestones for Q2', isStarred: true },
                    { id: 3, title: 'Design feedback', description: 'Revisions for homepage redesign', isStarred: false },
                    { id: 4, title: 'Team schedule', description: 'Upcoming availability for team members', isStarred: false },
                  ])}
                >
                  Reset List
                </button>
              </div>
            )}
          </div>
          
          <div className="p-3 sm:p-4 text-center text-xs sm:text-sm text-gray-500">
            Click "Swipe" to simulate a swipe action on each item.
            <br />
            This reveals action buttons like star, archive and delete.
          </div>
        </div>
      </div>
    </section>
  );
};
