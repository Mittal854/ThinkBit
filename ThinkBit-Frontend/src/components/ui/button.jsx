import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "rounded-lg font-medium transition-all duration-200 flex items-center justify-center cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
    secondary: "bg-gray-700 hover:bg-gray-800 text-white shadow-md",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white shadow-md",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        sizeStyles[size]
      } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      {children}
    </button>
  );
};

export default Button;
