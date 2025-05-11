
import * as React from "react"

const MOBILE_BREAKPOINT = 640 // Match Tailwind's sm breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Set initial state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Function to update state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
