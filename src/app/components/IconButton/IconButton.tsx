import { ReactNode } from "react";
import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}

export const IconButton = ({ 
  icon, 
  onClick, 
  className = '' // Default value for className
}: IconButtonProps) => (
  <button 
    type="button"
    className={`${styles.button} ${className}`.trim()}
    onClick={onClick}
    aria-label="Icon button"
  >
    {icon}
  </button>
);