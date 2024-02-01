import styles from '../styles/header.module.css'
import NavBar from './navBar'
import Logo from './logo'

function Header() {
    
    return (
        <div className={styles.header}>
                <div className={styles.headerText}>
                    <span className={styles.topHeaderText}>SHRIMP</span>
                    <span className={styles.bottomHeaderText}>REPUBLIC</span>
                </div>
                <NavBar/>
            <Logo/>
        </div>

    )
}

export default Header