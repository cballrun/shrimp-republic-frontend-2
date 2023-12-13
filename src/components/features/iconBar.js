import styles from '../styles/footer.module.css'
import chessMeitoLogo from '../images/chessMeitoLogo.png'
import flyFishCircleLogo from '../images/flyFishCircleLogo.png'
import shoreCastsLogo from '../images/shoreCastsLogo.png'

function IconBar() {
  return (
    <div className={styles.iconBar}>
        <a href="https://chessmeito.com">
          <img src={chessMeitoLogo} alt="Chess Meito Logo" className={styles.icon} />
        </a>
        <a href="https://chasegaddis.com">
          <img src={flyFishCircleLogo} alt="Shrimp Republic Logo" className={styles.icon} />
        </a>
        <a href="https://www.shorecasts.com">
          <img src={shoreCastsLogo} alt="ShoreCasts Logo" className={styles.icon} />
        </a>
    </div>
  )
}
export default IconBar