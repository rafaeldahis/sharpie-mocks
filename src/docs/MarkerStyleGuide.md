
# Marker Style Design System

A sketch-style, marker-like UI kit that brings a playful, hand-drawn aesthetic to your web applications.

## Installation

### Method 1: Manual Integration

1. Copy the `marker-styles.css` file into your project
2. Import the CSS file in your main entry point:
```js
import './path/to/marker-styles.css';
```
3. Copy the React components from the `src/components/marker` directory into your project
4. Modify your Tailwind configuration to include the marker style theme extensions

### Method 2: Using as a Package (once published to npm)

```bash
npm install marker-style-kit
```

```js
// In your main entry file
import 'marker-style-kit/dist/styles.css';

// In your component
import { SketchButton, SketchCard } from 'marker-style-kit';
```

## Font Integration

The Marker Style Design System uses playful fonts like Playpen Sans and Shantell Sans. For optimal performance, add these to your HTML head:

```html
<!-- Preconnect to Google Fonts domain to establish early connection -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load the fonts with display=swap for better performance -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@400;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@400;700&display=swap">
```

Then configure the fonts in your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'playpen': ['"Playpen Sans"', 'cursive', 'sans-serif'],
        'shantell': ['"Shantell Sans"', 'cursive', 'sans-serif'],
        'comic': ['"Comic Sans MS"', '"Comic Neue"', 'cursive', 'sans-serif'],
      }
    }
  }
}
```

Use these fonts in your components:

```jsx
<h1 className="font-playpen">Playpen Sans Heading</h1>
<p className="font-shantell">Shantell Sans paragraph</p>
<div className="font-comic">Comic style text</div>
```

## Tailwind CSS Integration

Add the marker style theme extensions to your `tailwind.config.js`:

```js
// Import the marker theme configuration
const markerConfig = require('./path/to/marker-tailwind-config');

// Merge with your tailwind config
module.exports = {
  // Your existing config
  theme: {
    extend: {
      // Spread the marker theme extensions
      ...markerConfig.theme.extend
    }
  },
  // Rest of your config
};
```

## Components

### SketchButton

```jsx
import { SketchButton } from './path/to/marker/components';

<SketchButton onClick={() => alert('Clicked!')}>Click Me!</SketchButton>
<SketchButton variant="primary">Primary Button</SketchButton>
<SketchButton variant="secondary">Secondary Button</SketchButton>
<SketchButton variant="outline">Outline Button</SketchButton>
<SketchButton disabled>Disabled Button</SketchButton>
```

### SketchInput

```jsx
import { SketchInput } from './path/to/marker/components';

<SketchInput 
  label="Username" 
  placeholder="Enter your username"
/>

<SketchInput 
  label="Password" 
  type="password"
  placeholder="Enter your password" 
/>
```

### SketchCheckbox

```jsx
import { SketchCheckbox } from './path/to/marker/components';

<SketchCheckbox 
  label="Remember me"
  checked={rememberMe}
  onChange={(e) => setRememberMe(e.target.checked)}
/>
```

### SketchRadio

```jsx
import { SketchRadio } from './path/to/marker/components';

<SketchRadio 
  label="Option 1"
  name="options"
  checked={selectedOption === 'option1'}
  onChange={() => setSelectedOption('option1')}
/>

<SketchRadio 
  label="Option 2"
  name="options"
  checked={selectedOption === 'option2'}
  onChange={() => setSelectedOption('option2')}
/>
```

### SketchCard

```jsx
import { SketchCard } from './path/to/marker/components';

<SketchCard title="Card Title">
  <p>This is the content of the card.</p>
</SketchCard>
```

### SketchToggle

```jsx
import { SketchToggle } from './path/to/marker/components';

<SketchToggle 
  label="Dark Mode"
  defaultChecked={isDarkMode}
  onChange={(checked) => setDarkMode(checked)}
/>
```

### SketchPieChart

```jsx
import { SketchPieChart } from './path/to/marker/components';

const data = [
  { value: 30, color: '#FF5733', label: 'Red' },
  { value: 40, color: '#33FF57', label: 'Green' },
  { value: 20, color: '#3357FF', label: 'Blue' },
  { value: 10, color: '#F3FF33', label: 'Yellow' }
];

<SketchPieChart data={data} size={200} />
```

### SketchTable

```jsx
import { SketchTable } from './path/to/marker/components';

const headers = ['Name', 'Age', 'Location'];
const rows = [
  ['John Doe', 32, 'New York'],
  ['Jane Smith', 28, 'London'],
  ['Bob Johnson', 45, 'Paris']
];

<SketchTable headers={headers} rows={rows} />
```

### SketchLoader

```jsx
import { SketchLoader } from './path/to/marker/components';

<SketchLoader size={32} />
```

## CSS Classes

You can also use the CSS classes directly in your HTML/JSX:

```html
<div class="sketch-card">
  <h3 class="marker-heading">Card Title</h3>
  <p class="marker-text">Card content goes here.</p>
  <button class="sketch-btn">Click Me</button>
</div>
```

## Customization

You can extend or override the marker styles by adding your own CSS rules after importing the marker styles.

```css
/* Your custom CSS */
.sketch-btn {
  /* Override default button styles */
  background-color: purple;
}

/* Create new marker-style classes */
.sketch-avatar {
  border-radius: 50%;
  border: 2px dashed #000;
  transform: rotate(2deg);
}
```
