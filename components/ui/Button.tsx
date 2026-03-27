import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({ variant = 'primary', children, icon, className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-secondary text-black hover:bg-secondary/90 focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="flex items-center gap-2">
        {children}
        {icon && <span>{icon}</span>}
      </span>
    </button>
  );
}
