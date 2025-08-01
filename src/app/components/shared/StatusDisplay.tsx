import { ReactNode } from "react";

interface StatusDisplayProps {
  icon: ReactNode;
  text: string;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
}

export const StatusDisplay = ({
  icon,
  text,
  textColor = "white",
  backgroundColor = "#1c1c1c",
  className = "status-display",
}: StatusDisplayProps) => {
  return (
    <div 
      className={className} 
      style={{ backgroundColor }}
    >
      {icon}
      <p style={{ color: textColor }}>
        {text}
      </p>
    </div>
  );
}; 