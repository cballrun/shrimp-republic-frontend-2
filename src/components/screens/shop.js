import styles from '../styles/shop.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'


function Shop() {
    
    return(
        <div className={styles.main}>
            <Header/>
            <Footer/>
        </div>
    )

}

export default Shop