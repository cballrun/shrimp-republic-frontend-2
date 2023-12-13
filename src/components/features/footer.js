import styles from '../styles/footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
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
    )
}

export default Footer