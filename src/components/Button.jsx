import React from "react";

function Button({
  text,
  type = "button",
  bgColor = "bg-teal-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className}`}
      {...props}
    ></button>
  );
}

export default Button;
