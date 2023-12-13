import styles from '../styles/home.module.css'
import NavButton from '../features/navButton.js'

function Home() {
    return(

        <div className={styles.main}>
            <NavButton path={"/home"} text={"Home"}/>
        </div>
    )

}

export default Home