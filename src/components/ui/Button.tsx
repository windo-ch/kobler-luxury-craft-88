
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) => {
  // Determine the correct class based on variant and size
  const variantClasses = {
    primary: "bg-luxury-navy text-white hover:bg-luxury-navy/90 border border-luxury-navy",
    secondary: "bg-luxury-gold text-white hover:bg-luxury-gold/90 border border-luxury-gold",
    outline: "bg-transparent text-luxury-navy hover:bg-luxury-navy/5 border border-luxury-navy",
  };

  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-lg",
  };

  const baseClasses = "inline-block font-montserrat font-medium transition-colors duration-200 tracking-wide text-center";
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Default render as button
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
