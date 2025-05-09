
/**
 * Marker Style System - Tailwind Configuration
 * 
 * This file provides the Tailwind CSS configuration needed to implement
 * the marker style design system in any Tailwind-based project.
 * 
 * Usage:
 * - Import this file in your tailwind.config.js
 * - Merge it with your existing configuration using spread operators or a merge utility
 */

const markerTailwindConfig = {
  theme: {
    extend: {
      colors: {
        sketch: {
          black: '#000',
          midGrey: '#999',
          accentBlue: '#2179FF',
          disabled: 'rgba(153, 153, 153, 0.3)', // 30% opacity grey
          hover: '#f3f3f3'
        }
      },
      fontFamily: {
        'comic': ['"Comic Neue"', 'cursive'],
        'heading': ['"Patrick Hand"', 'cursive']
      },
      fontSize: {
        'heading': '18px',
        'body': '14px',
        'caption': '12px',
        'large-metric': '28px'
      },
      keyframes: {
        'spin-loader': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'spin-loader': 'spin-loader 1.5s linear infinite'
      }
    }
  }
};

export default markerTailwindConfig;
