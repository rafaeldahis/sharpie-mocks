
import * as React from "react"

// Match Tailwind's breakpoints
const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ScreenState {
  isMobile: boolean;
  screenSize: ScreenSize;
  width: number;
  height: number;
}

export function useIsMobile() {
  const [screenState, setScreenState] = React.useState<ScreenState>({
    isMobile: false,
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
      const isMobile = width < BREAKPOINTS.sm
      
      setScreenState({
        isMobile,
        screenSize,
        width,
        height
      })
    }
    
    // Set initial state
    updateScreenSize()
    
    // Add event listener
    window.addEventListener('resize', updateScreenSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenState
}
