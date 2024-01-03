import styles from '../styles/appLink.module.css'
import arrow from '../images/triangle-cyan.png'

function AppLink({name, active, seActive, key}) {

    return (
        <div className={styles.link}>
            <div className={styles.name}>
                {name}
            </div>
            <img 
                className={styles.arrow}
                src={arrow} 
                onClick={() => seActive(key)}
                />
        </div>

    )
}

export default AppLink