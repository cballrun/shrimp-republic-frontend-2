import styles from '../styles/footer.module.css'
import chessMeitoLogo from '../images/chessMeitoLogo.png'
import flyFishCircleLogo from '../images/flyFishCircleLogo.png'
import shoreCastsLogo from '../images/shoreCastsLogo.png'

function IconBar() {
  return (
    <div className={styles.iconBar}>
        <a href="https://chessmeito.com">
          <img src={chessMeitoLogo} alt="Chess Meito Icon" className={styles.chessMeitoIcon} />
        </a>
        <a href="https://chasegaddis.com">
          <img src={flyFishCircleLogo} alt="Shrimp Republic Icon" className={styles.shrimpRepublicIcon} />
        </a>
        <a href="https://www.shorecasts.com">
          <img src={shoreCastsLogo} alt="ShoreCasts Icon" className={styles.shoreCastsIcon} />
        </a>
    </div>
  )
}
export default IconBar