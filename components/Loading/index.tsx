import RotateRightIcon from '@mui/icons-material/RotateRight';

// Styles
import styles from './styles.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <RotateRightIcon className={styles.spinner} />
      <p>Loading...</p>
    </div>
  );
}
