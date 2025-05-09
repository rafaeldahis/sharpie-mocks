# 🖍️ Marker Style Design System

A playful, hand-drawn sketch-style UI kit that brings personality to web applications with a creative marker aesthetic.

![Marker Style Preview](https://via.placeholder.com/800x400?text=Marker+Style+Preview)

## 🚀 Overview

Marker Style is a design system that provides sketch-style UI components reminiscent of hand-drawn mockups and wireframes. It's perfect for:

- Prototypes and wireframes that maintain a sketch feel
- Creative applications and websites targeting children or education
- Projects that want to stand out with a playful, unique aesthetic
- Presentations or demos that want to maintain a "work-in-progress" look

## ✨ Features

- **Sketch-Style Components**: Buttons, inputs, cards, checkboxes and more with a hand-drawn aesthetic
- **Wobbly Borders & Effects**: Non-uniform borders and shapes that mimic hand-drawn elements
- **Comic Sans Font**: The quintessential casual font for maximum playfulness
- **Hand-Drawn Iconography**: Common UI icons with a sketchy appearance
- **Tooltip System**: Contextual information with sketch-style tooltips
- **Pagination Controls**: Navigate through multi-page content with hand-drawn pagination
- **Color System**: Predefined color palette specifically designed for sketch-style interfaces
- **Grid & Spacing System**: Consistent layout tools for alignment

## 🎨 Components

The design system includes the following components:

- `SketchButton`: Primary, secondary, and outline variants
- `SketchInput`: Text input fields with labels
- `SketchCheckbox`: Toggleable checkbox controls
- `SketchRadio`: Radio button selection controls
- `SketchCard`: Content containers with borders
- `SketchToggle`: On/off toggle switches
- `SketchPieChart`: Simple data visualization
- `SketchTable`: Tabular data display
- `SketchLoader`: Loading indicator
- `SketchPagination`: Page navigation controls
- `SketchTooltip`: Contextual information popovers
- `SketchIconography`: Hand-drawn icon set

## 📋 Usage

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/marker-style-design-system.git

# Navigate to the project directory
cd marker-style-design-system

# Install dependencies
npm install

# Run the development server
npm run dev
```

### Using with AI Tools

To incorporate these sketch-style elements in AI prototyping tools:

1. Copy the CSS styles from `src/styles/marker-styles.css`
2. Ask your AI tool: "Apply these sketch styles to my UI components"
3. Or direct prompt: "Create a hand-drawn version of my interface using these sketch styles"

### Integrating in Your Project

#### Method 1: Copy CSS and Components

1. Copy the `marker-styles.css` file into your project
2. Import the CSS file in your main entry point
3. Copy the React components from the `src/components/marker` directory
4. Use the components in your application

```jsx
import './path/to/marker-styles.css';
import { SketchButton, SketchCard } from './path/to/components';

function App() {
  return (
    <div>
      <SketchCard title="Welcome!">
        <p>This is my sketch-style card</p>
        <SketchButton>Click Me!</SketchButton>
      </SketchCard>
    </div>
  );
}
```

#### Method 2: Tailwind Integration

Add these classes to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'comic': ['"Comic Sans MS"', 'cursive']
      },
      // other extensions from marker-tailwind-config.js
    }
  }
}
```

## 📱 Responsive Design

All components are responsive by default and will adapt to different screen sizes. The design system uses a flexible approach that works well on mobile, tablet, and desktop.

## 🎯 Browser Support

The design system works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Inspired by sketch-style wireframe aesthetics
- Comic Sans MS font for the playful typography
- Hand-drawn UI patterns common in whiteboard and brainstorming sessions

## 🔗 Links

- [Demo Site](https://lovable.dev/projects/abde8798-1e67-4915-976b-93ea90fd1d9a)
- [Documentation](https://github.com/yourusername/marker-style-design-system/blob/main/src/docs/MarkerStyleGuide.md)
