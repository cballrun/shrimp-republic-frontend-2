import styles from '../styles/footer.module.css'
import IconBar from './iconBar'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.column}>
              <text className={styles.footerText}>
                  CUSTOM SOLUTIONS 
              </text>
              <text className={styles.footerTextMid}>
                RAPID DEPLOYMENT
              </text>
              <text className={styles.footerText}>
                WEB AND MOBILE
              </text>
            </div>
            <IconBar/>
            <div className={styles.infoColumn}>
              <text className={styles.infoHeader}>
                Contact Information
              </text>
              <text className={styles.infoText}>
                (850) 582-2223
              </text>
              <text className={styles.infoText}>
                3165 Grand Ave APT 407
              </text>
              <text className={styles.infoText}>
                Pinellas Park, FL 33782
              </text>
            </div>
        </div>
    )
}

export default Footer