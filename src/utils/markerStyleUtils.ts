
/**
 * Marker Style Utility Functions
 * Helper functions for working with the marker style system
 */

/**
 * Darkens a hex color by the specified percentage
 * @param hex Hex color code (e.g. #2179FF)
 * @param percent Percentage to darken (0-100)
 * @returns Darkened hex color
 */
export const darkenColor = (hex: string, percent: number): string => {
  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Darken
  r = Math.floor(r * (1 - percent / 100));
  g = Math.floor(g * (1 - percent / 100));
  b = Math.floor(b * (1 - percent / 100));

  // Convert back to hex
  return '#' + 
    ((r < 16) ? '0' + r.toString(16) : r.toString(16)) +
    ((g < 16) ? '0' + g.toString(16) : g.toString(16)) +
    ((b < 16) ? '0' + b.toString(16) : b.toString(16));
};

/**
 * Lightens a hex color by the specified percentage
 * @param hex Hex color code (e.g. #2179FF)
 * @param percent Percentage to lighten (0-100)
 * @returns Lightened hex color
 */
export const lightenColor = (hex: string, percent: number): string => {
  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Lighten
  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

  // Convert back to hex
  return '#' + 
    ((r < 16) ? '0' + r.toString(16) : r.toString(16)) +
    ((g < 16) ? '0' + g.toString(16) : g.toString(16)) +
    ((b < 16) ? '0' + b.toString(16) : b.toString(16));
};

/**
 * Generates a random wobble transform for sketch elements
 * @param intensity How intense the wobble should be (default: 1)
 * @returns CSS transform string
 */
export const generateWobble = (intensity: number = 1): string => {
  const rotate = (Math.random() * 2 - 1) * intensity;
  const translateX = (Math.random() * 2 - 1) * intensity;
  const translateY = (Math.random() * 2 - 1) * intensity;
  
  return `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
};
