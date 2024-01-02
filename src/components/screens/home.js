import styles from '../styles/home.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'


function Home() {
    
    return(
        <div className={styles.main}>
            <Header/>
            <Footer/>
        </div>
    )

}

export default Home