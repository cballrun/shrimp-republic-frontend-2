import styles from '../styles/header.module.css'
import NavBar from './navBar'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.main}>
                <NavBar/>
            </div>
        </div>
    )
}

export default Header