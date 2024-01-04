import styles from '../styles/splash.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import { useState } from 'react'

function Splash({projects}) {
    const [active, setActive] = useState(0)

    return(
        <div className={styles.main}>
            <Header/>
            <div className={styles.splashTextUpper}>
                <div className={styles.exploreBox}>
                    <div className={styles.exploreText}>EXPLORE SHRIMP </div>
                    <div className={styles.exploreText}>REPUBLIC</div>
                </div>
            </div>
            <div className={styles.splashTextLower}>
                <div className={styles.appText}>
                    WHETHER YOU'RE ENJOYING
                </div>
                <div className={styles.appText}>
                    CHESSMEITO'S PUZZLES OR
                </div>
                <div className={styles.appText}>
                    PLANNING A FISHING TRIP WITH
                </div>
                <div className={styles.appText}>
                    SHORECASTS, OUR APPLICATIONS
                </div>
                <div className={styles.appText}>
                    ARE PURPOSE-BUILT FOR REAL-
                </div>
                <div className={styles.appText}>
                    WORLD USE.
                </div>
                <div className={styles.appText}>
                    <br></br>
                    WHERE TECHNICAL EXPERTISE
                </div>
                <div className={styles.appText}>
                    MEETS EVERYDAY UTILITY.
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Splash