import styles from '../styles/splash.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import SplashUpper from '../features/splashUpper.js'
import SplashLower from '../features/splashLower.js'
import grouperLogo from '../images/grouperLogo.png'

function Splash() {

    return(
        <div className={styles.main}>
            <Header/>
            <SplashUpper/>
            <SplashLower/>
            <img src={grouperLogo} alt="Grouper Logo" className={styles.grouperLogo} />
            <Footer/>
        </div>
    )

}

export default Splash