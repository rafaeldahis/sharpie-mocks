
import * as React from "react"

// Match Tailwind's breakpoints
const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface ScreenState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenSize: ScreenSize;
  width: number;
  height: number;
}

export function useIsMobile(): ScreenState {
  const [screenState, setScreenState] = React.useState<ScreenState>({
    isMobile: typeof window !== 'undefined' ? window.innerWidth < BREAKPOINTS.md : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= BREAKPOINTS.md && window.innerWidth < BREAKPOINTS.lg : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= BREAKPOINTS.lg : true,
    screenSize: 'lg',
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  })

  React.useEffect(() => {
    const getScreenSize = (width: number): ScreenSize => {
      if (width < BREAKPOINTS.xs) return 'xs'
      if (width < BREAKPOINTS.sm) return 'xs' 
      if (width < BREAKPOINTS.md) return 'sm'
      if (width < BREAKPOINTS.lg) return 'md'
      if (width < BREAKPOINTS.xl) return 'lg'
      return 'xl'
    }

    const updateScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const screenSize = getScreenSize(width)
      
      // Define device types
      const isMobile = width < BREAKPOINTS.md // Mobile: xs to sm breakpoints
      const isTablet = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg // Tablet: md breakpoint
      const isDesktop = width >= BREAKPOINTS.lg // Desktop: lg and above
      
      setScreenState({
        isMobile,
        isTablet,
        isDesktop,
        screenSize,
        width,
        height
      })
    }
    
    // Set initial state
    updateScreenSize()
    
    // Throttle resize events for better performance
    let resizeTimer: ReturnType<typeof setTimeout>;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateScreenSize();
      }, 100);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer);
    }
  }, [])

  return screenState
}
