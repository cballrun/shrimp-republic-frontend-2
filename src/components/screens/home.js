import styles from '../styles/home.module.css'
import NavBar from '../features/navBar.js'

function Home() {
    return(

        <div className={styles.main}>
            <NavBar/>
        </div>
    )

}

export default Home