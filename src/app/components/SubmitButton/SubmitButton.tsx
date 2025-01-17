import styles from './SubmitButton.module.css';

export interface SubmitButtonProps {
    title: string;
    colorless?: boolean;
    onClick: () => void;
}

export const SubmitButton = ({ title, onClick, colorless=false}: SubmitButtonProps) => {

    return (
        <>
            <button className={`${styles.submitButton} ${colorless ? styles.colorless : ""}`} onClick={onClick}>
                <span className={styles.submitButtonContent}>{title}</span>
            </button>
        </>
        )
}

