import styles from '../styles/login.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'


function Login() {
    
    return(
        <div className={styles.main}>
            <Header/>
            <Footer/>
        </div>
    )

}

export default Login