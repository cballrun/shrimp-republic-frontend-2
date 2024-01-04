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
                    <div className={styles.exploreTop}>EXPLORE SHRIMP </div>
                    <div className={styles.exploreBottom}>REPUBLIC</div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Splash