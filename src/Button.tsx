import React from "react";

// Props for Button component
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  // Default click handler shows alert
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      alert("Button clicked!");
    }
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
