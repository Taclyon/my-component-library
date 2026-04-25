import { cn } from "../../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;            
  variant?: 'primary' | 'secondary'; 
}


export const Button = ({ 
    label, 
    variant = 'primary', 
    className='',
    ...props
}: ButtonProps) => {
  
  
  const baseStyle = "px-4 py-2 rounded font-bold transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <button 
      {...props}
      className={cn(baseStyle, variants[variant], className)}
    >
      {label}
    </button>
  );
};