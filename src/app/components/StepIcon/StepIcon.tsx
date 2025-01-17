import styles from './StepIcon.module.css';

interface StepIconProps {
    number: number;
    isActive: boolean;
    isCompleted: boolean;
}

export const StepIcon = ({ number, isActive, isCompleted }: StepIconProps) => {
    return (
        <svg
            className={`${styles.circle} ${isActive && styles.active } ${isCompleted && styles.completed }`} 
            focusable="false" 
            aria-hidden="true" 
            viewBox="0 0 24 24"
            width="36"
            height="36"
        >
            <circle cx="12" cy="12" r="12" />
            {isCompleted ? (
                <path 
                    className={styles.checkmark} 
                    d="M6 12l5 4 7-7" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                />
            ) : (
                <text 
                    className={`${styles.text} ${isActive ? styles.activeText : ''}`} 
                    x="12" 
                    y="12" 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    dy=".1em"
                >
                    {number}
                </text>
            )}
        </svg>
    );
};
