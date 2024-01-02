import styles from '../styles/apps.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'

function Apps() {
    
    return(
        <div className={styles.main}>
            <Header/>
            <Footer/>
        </div>
    )

}

export default Apps