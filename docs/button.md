# Button Component

The Button component is a flexible and reusable element designed to trigger actions.

## 📋 Props

| Prop | Type | Default | Description |
|---|---|---|---|
| label | string | required | The text label to display. |
| variant | string | primary | The visual style. |
| size | string | md | The scale of the button. |
| disabled | boolean | false | If true, the button is non-interactive. |

## 💡 Usage

```tsx
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