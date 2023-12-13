import styles from '../styles/header.module.css'
import NavBar from './navBar'
import Logo from './logo'

function Header() {
    
    return (
        <div className={styles.header}>
            <div className={styles.main}>
                <Logo/>
                <NavBar/>
            </div>
        </div>
    )
}

export default Header