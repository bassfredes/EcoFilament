"use client";
import React from "react";

type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => (
  <button
    onClick={onClick}
    className={className}
    disabled={disabled}
    type={type}
  >
    {text}
  </button>
);
