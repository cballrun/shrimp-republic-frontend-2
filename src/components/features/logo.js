import shrimpCoralLogo from '../images/shrimpCoralLogo.png'
import styles from '../styles/logo.module.css'

function Logo() {
    return (
      <div className={styles.logoContainer}>
        <img src={shrimpCoralLogo} alt="Shrimp Coral Logo" className={styles.logoImage} />
      </div>
    );
  }

  export default Logo