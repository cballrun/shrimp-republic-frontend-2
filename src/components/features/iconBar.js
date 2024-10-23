import styles from '../styles/footer.module.css'
import chessMeitoLogo from '../images/chessMeitoLogo.png'
import gameDriveLogo from '../images/gameDriveLogo.png'
import shoreCastsLogo from '../images/shoreCastsLogo.png'

function IconBar() {
  return (
    <div className={styles.iconBar}>
        <a href="https://www.shorecasts.com">
          <img src={shoreCastsLogo} alt="ShoreCasts Icon" className={styles.shoreCastsIcon} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.chessmeitomobile&hl=en_US">
          <img src={chessMeitoLogo} alt="Chess Meito Icon" className={styles.chessMeitoIcon} />
        </a>
        <a href="https://gamedrive.io">
          <img src={gameDriveLogo} alt="Game Drive Icon" className={styles.gameDriveIcon} />
        </a>
    </div>
  )
}
export default IconBar