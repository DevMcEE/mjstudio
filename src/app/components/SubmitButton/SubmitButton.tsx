import styles from './SubmitButton.module.css';

export interface SubmitButtonProps {
    title: string;
    colorless?: boolean;
    secondary?: boolean;
    onClick: () => void;
}

export const SubmitButton = ({ title, onClick, secondary = false, colorless = false }: SubmitButtonProps) => {

    return (
        <button className={`${styles.submitButton} ${colorless ? styles.colorless : ""} ${secondary ? styles.secondary : ""}`} onClick={onClick}>
            <span className={styles.submitButtonContent}>{title}</span>
        </button>
    )
}