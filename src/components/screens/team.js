import styles from '../styles/team.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'


function Team() {
    
    return(
        <div className={styles.main}>
            <Header/>
            <Footer/>
        </div>
    )

}

export default Team