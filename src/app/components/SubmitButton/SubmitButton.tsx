import styles from './SubmitButton.module.css';

export interface SubmitButtonProps {
    title: string;
    secondary?: boolean;
    onClick: () => void;
}

export const SubmitButton = ({ title, onClick, secondary: secondary = false }: SubmitButtonProps) => {

  return (
    <button className={`${styles.submitButton} ${secondary ? styles.secondary : ""}`} onClick={onClick}>
      <span className={styles.submitButtonContent}>{title}</span>
    </button>
  );
};