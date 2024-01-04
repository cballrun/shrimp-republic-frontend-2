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
                <div className={styles.splashTextLower}>
                    <div className={styles.appText}>
                        WHETHER YOU'RE ENJOYING CHESSMEITO'S PUZZLES OR PLANNING A FISHING TRIP WITH SHORECASTS,
                        OUR APPLICATIONS ARE PURPOSE BUILT FOR REAL WORLD USE
                    </div>
                    <div className={styles.appText}>
                        WHERE TECHNICAL EXPERTISE MEETS EVERYDAY UTILITY.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Splash