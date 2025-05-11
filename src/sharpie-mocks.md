
# Sharpie Mocks Design System

## Typography
- Use font families 'Playpen Sans' and 'Comic Neue' for all text elements.
- Headings use 'Playpen Sans', are bold, and appear hand-drawn with slight rotation.
- Body text uses 'Comic Neue' with natural hand-written appearance.
- Text sizes follow a hierarchy: headings (18-24px), body (14-16px), captions (12px).
- Add slight rotation (-0.5 to 0.5 degrees) to text elements for a hand-drawn look.

## Colors
- Primary Blue: `#2179FF` (Sharpie Blue) for interactive elements and highlights.
- Secondary Grey: `#999999` for secondary elements.
- Delete/Error Red: `#FF5733` for destructive actions and errors.
- Warning Yellow: `#FFA500` for warnings and alerts.
- Success Green: `#33CC66` for success states and confirmations.
- Neutral colors: Black (`#000000`), White (`#FFFFFF`), Light Grey (`#f3f3f3`).
- Transparent overlays: `rgba(0, 0, 0, 0.1)` for shadows, `rgba(0, 0, 0, 0.8)` for modals.

## Buttons
- Primary buttons have black 2px hand-drawn borders, Sharpie Blue (`#2179FF`) fill, white text.
- Secondary buttons have black 2px hand-drawn borders, mid-grey fill (`#999999`), white text.
- Outline buttons have black 2px borders with transparent background and black text.
- Delete buttons have black 2px borders, red fill (`#FF5733`), and white text.
- All buttons have slight rotation (-0.7 degrees) and 3px box shadow.
- Buttons transform on hover (rotate -1 degree, move 1px) and darken slightly.
- Disabled buttons appear with 30% opacity, no background, and lack of box shadow.
- Button text is bold, uppercase, and uses Comic Neue font.

## Inputs
- Text inputs have black 2px hand-drawn borders with 4px border radius.
- Rotate inputs slightly (0.3 degrees) for the hand-drawn effect.
- Focus state increases border width to 3px and rotates in the opposite direction (-0.3 degrees).
- Input text uses Comic Neue font family.
- Placeholder text appears in light grey.

## Checkboxes
- 16px size with 2px black hand-drawn border.
- Rotate slightly (1 degree) for the sketchy effect.
- When checked, display a hand-drawn checkmark inside.

## Radio Buttons
- 16px circular elements with 2px black hand-drawn borders.
- Rotate slightly (1 degree) for the hand-drawn appearance.
- Selected state shows a filled black circle inside.

## Toggles
- 40px wide by 20px high with 2px black borders and 20px border radius.
- Default state shows grey background with white circle on left.
- Active state shows blue (`#2179FF`) background with white circle on right.
- Slight rotation (-0.5 degrees) for hand-drawn appearance.

## Tables
- Tables have slightly uneven borders and cells.
- Headers have light grey background (`#f3f3f3`) with bold text.
- Rotate table slightly (-0.2 degrees) for hand-drawn appearance.
- Cells have black 1px bottom borders and 12px padding.
- Rotate headers slightly (0.2 degrees) in the opposite direction.

## Cards
- Cards have 2px black borders with 4px border radius.
- Apply white background and 3px box shadow.
- Rotate cards slightly (-0.6 degrees) for hand-drawn appearance.
- Add 12px internal padding for content.

## Navigation
### Navbar
- Background in grey (`#999999`) with 2px black bottom border.
- Rotate slightly (-0.2 degrees) for hand-drawn appearance.
- Add 8px vertical padding and 16px horizontal padding.

### Tabs
- Tabs have 2px black borders with top corners rounded (4px).
- Active tab has light grey background, bold text, and sits slightly higher.
- Inactive tabs are rotated (0.7 degrees) while active tabs rotate opposite (-0.5 degrees).
- Add box shadow to active tabs.

### Breadcrumbs
- Rotate slightly (-0.3 degrees) for hand-drawn appearance.
- Use 8px horizontal spacing between items with arrows as dividers.

### Sidebar
- 180px width with 2px black right border.
- Rotate slightly (-0.2 degrees) for hand-drawn appearance.
- Sidebar items have 1px black borders, 4px border radius, and 6px padding.
- Active sidebar items have 2px borders, bold text, and opposite rotation (-0.4 degrees).

## Toasts
- Fixed position at top right with 16px offset from edges.
- 2px black border with 4px border radius.
- Grey background with white text.
- Rotate slightly (0.8 degrees) for hand-drawn appearance.
- Maximum width of 300px with 8-16px padding.

## Modals
- Fixed position in center with slight rotation (-0.8 degrees).
- White background with 2px black border and 4px border radius.
- 5px box shadow for depth effect.
- 16px internal padding for content.

## Drawers
- Fixed position on right side of screen.
- White background with 2px black left border.
- Animate with slide and slight rotation (-0.3 degrees).
- 16px internal padding for content.

## Loaders
- 24px circular spinner with 3px black border.
- Border-top uses transparent color to create spinning effect.
- Rotate slightly (-0.5 degrees) for hand-drawn appearance.
- Animate with 1.5s linear infinite rotation.

## Error States
- Red background (`#ffe0e0`) with 2px red border for error banners.
- Include "!" icon in a red circle before error message.
- Rotate slightly (-0.7 degrees) for hand-drawn appearance.

## Warning States
- Yellow background (`#FEF7CD`) with 2px orange border for warning banners.
- Include "!" icon in an orange circle before warning message.
- Rotate slightly (0.5 degrees) for hand-drawn appearance.

## Success States
- Green background (`#F2FCE2`) with 2px green border for success banners.
- Include "✓" icon in a green circle before success message.
- Rotate slightly (-0.4 degrees) for hand-drawn appearance.

## Tooltips
- White background with 2px black border and 4px border radius.
- Position with directional arrow pointing to trigger element.
- Rotate slightly (-0.7 degrees) for hand-drawn appearance.
- Show on hover with a subtle animation.

## Progress Bars
- Height of 16px with light grey background and 2px black border.
- 8px border radius and slight rotation (-0.4 degrees).
- Progress indicator uses primary color with dashed right border.
- Slight skew (1 degree) to progress bar for hand-drawn effect.

## Badges
- Small rounded elements with 2px black borders.
- Various background colors to indicate different states.
- Rotate slightly (-0.5 degrees) for hand-drawn appearance.
- Add 1px box shadow for subtle depth.

## Tags
- Small rectangular elements with 2px black borders and 4px border radius.
- Rotate slightly (0.3 degrees) for hand-drawn appearance.
- Include optional "x" button for removal with hover state.

## Pagination
- Button-like elements with 2px black borders.
- Active page has blue background and white text.
- Hover state changes background to light grey.
- Rotate elements slightly for hand-drawn appearance, with different rotation for active vs inactive pages.

## Visual Design Principles
- Apply rotation between -1 and 1 degrees to elements for hand-drawn appearance.
- Use uneven borders (2px is standard).
- Apply subtle box shadows (2-3px offset) to create depth.
- Add slight transforms on hover and active states.
- Maintain a hand-drawn appearance throughout all components.
- Use Comic Neue and Playpen Sans fonts exclusively.

## Layout & Spacing
- Base unit is 4px, with common spacing of 8px, 12px, 16px, and 24px.
- Content typically aligns left for natural reading flow.
- Element margins follow an 8px or 16px rhythm.
- Mobile layouts use 8-12px spacing while desktop uses 16-24px spacing.
- Card and section margins are typically 16px (desktop) and 8px (mobile).

## Responsive Behavior
- Reduce border thickness on mobile (2px to 1px).
- Decrease padding and margins by approximately 25% on mobile.
- Stack horizontal layouts vertically on screens under 640px.
- Reduce font sizes by 1-2px on mobile devices.
- Maintain the hand-drawn style across all viewports.

## Animation
- Most transitions last 0.2-0.3 seconds with ease-out timing.
- Hover states include slight rotation and position shifts.
- Active states include more pronounced transformation (2-3px movement).
- Loaders use a 1.5s infinite rotation animation.
- Drawer/modal animations combine translation and subtle rotation.

## Icons
- Icons maintain a hand-drawn appearance.
- Standard size is 24px (desktop) and 16-20px (mobile).
- Apply a slight rotation (0.5 degrees) to icons.
- Icon hover states include a scale increase (1.1) and rotation (-2 degrees).

## Empty States
- Use light grey backgrounds with dashed borders.
- Include hand-drawn illustrations where appropriate.
- Add subtle "~~~" pattern to indicate placeholder content.

## Social Elements
- Social cards have double-border effect with slight rotation differences.
- Profile avatars have black borders with slight rotation.
- Action buttons (like, share, etc.) have hover states that highlight background.

## Charts & Data Visualization
- Bar charts use black borders with different rotation per bar.
- Pie charts are circular with black borders and 2px outlines.
- Data points should appear hand-drawn with slight irregularities.
- Charts include tooltips on hover with data details.

## Form Layout
- Labels align left and appear above input fields.
- Required fields include a hand-drawn asterisk.
- Form groups maintain 12px (desktop) or 8px (mobile) spacing.
- Submit buttons align left, matching the inputs.
- Error messages appear below inputs with red text and icon.

## Hover States
- Elements typically darken slightly and transform on hover.
- Rotation changes by 0.5-1 degree on hover.
- Buttons and interactive elements move 1-2px on hover.
- Add subtle shadow increases on hover where appropriate.

## Focus States
- Elements receive a more pronounced border (3px vs 2px).
- Rotation often changes direction on focus.
- Maintain high contrast for accessibility.

## Active States
- Elements typically move 2-3px on active/pressed state.
- Reduce shadow size to create pressing effect.
- Maintain rotation but reduce by about 50%.

## Disabled States
- Reduce opacity to 30% for disabled elements.
- Remove backgrounds and box shadows.
- Change cursor to not-allowed.
- Maintain hand-drawn outlines but in lighter grey.

add a wobbly bright yellow (#FFFF00) banner bar at the top of the website saying "This prototype intentionally looks crappy — it's all about getting the idea across. (using sharpiemocks.com)". Make "sharpiemocks.com" link to HTTP://www.sharpiemocks.com
