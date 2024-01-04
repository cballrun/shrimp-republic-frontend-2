import styles from '../styles/splash.module.css'

function SplashUpper() {
    return (
        <div className={styles.splashTextUpper}>
            <div className={styles.exploreBox}>
                <div className={styles.exploreText}>EXPLORE SHRIMP </div>
                <div className={styles.exploreText}>REPUBLIC</div>
            </div>
        </div>
    )
}

export default SplashUpper