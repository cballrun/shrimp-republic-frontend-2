import styles from '../styles/navButton.module.css'
import { useNavigate } from 'react-router-dom'

function NavButton({text, path}) {
    const navigate = useNavigate();
    return (
        <div className={styles.button}>
            <div 
                className={styles.buttonText}
                onClick={() => navigate(path)}>
                {text}
            </div>
        </div>
    )
}

export default NavButton 