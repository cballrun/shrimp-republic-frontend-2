import styles from '../styles/splash.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import { useState } from 'react'

function Splash({projects}) {
    const [active, setActive] = useState(0)

    return(
        <div className={styles.main}>
            <Header/>
            <div className={styles.splashText}>
                <div className={styles.exploreText}>
                    <span className={styles.exploreTop}>EXPLORE SHRIMP</span>
                    <span className={styles.exploreBottom}>REPUBLIC</span>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Splash