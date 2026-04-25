# Button Component

The `Button` component is a flexible and reusable element designed to trigger actions. It supports various visual variants, sizes, and states.

## 📦 Installation

```tsx
import { Button } from "@/components/ui";

📋 Props


Prop,Type,Default,Description
label,string,required,The text label to display inside the button.
variant,'primary' | 'secondary','primary',The visual style of the button.
size,'sm' | 'md' | 'lg','md',The scale of the button.
disabled,boolean,false,"If true, the button is non-interactive."
className,string,'',Custom Tailwind classes for additional styling.

💡 Usage Examples

<Button label="Click me" />


Visual Variants

<Button label="Primary Action" variant="primary" />
<Button label="Secondary Action" variant="secondary" />


Event Handling

<Button 
  label="Save Changes" 
  onClick={() => alert("Button clicked!")} 
/>

🛠 Customizing Styles
This component uses tailwind-merge internally, allowing you to pass custom Tailwind classes:

TypeScript
<Button 
  label="Custom Style" 
  className="bg-purple-600 hover:bg-purple-700 rounded-full" 
/>