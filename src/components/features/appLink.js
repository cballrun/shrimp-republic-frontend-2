import styles from '../styles/appLink.module.css'
import arrow from '../images/triangle-cyan.png'
import chessMeitoLogo from '../images/chessMeitoLogo.png'
import pTradeLogo from '../images/pTradeLogo.png'
import gameDriveLogo from '../images/gameDriveLogo.png'
import shoreCastsLogo from '../images/shoreCastsLogo.png'

function AppLink({
    index,
    active, 
    setActive, 
    classification,
    description,
    endDate,
    features,
    name, 
    stage,
    startDate,
    projectUrl
  }) {
    const imageHash = {
      "ChessMeito": chessMeitoLogo,
      "Shorecasts": shoreCastsLogo,
      "P-Trade": pTradeLogo,
      "Game Drive": gameDriveLogo
    } 

    const isActive = () => {
      if(active === index + 1) {
        return true
      } else {
        return false
      }
    }

    const activate = () => {
      if(isActive()) {
        setActive(0)
      } else {
        setActive(index + 1)
      }
    }

    return (
          <div className={styles.main}>
            {
              isActive() || active === 0 ?
            <div className={styles.link}>
              <div className={isActive() ? styles.activeTitleRow : styles.inactiveTitleRow}>
                <img src={imageHash[name]} className={styles.logo}/>
                <div className={styles.name}>
                    {name}
                </div>
                  <img 
                      className={isActive() ? styles.activeArrow : styles.inactiveArrow}
                      src={arrow} 
                      onClick={() => activate()}
                      />
              </div>
                {
                  isActive() ? 
                  <div className={styles.details}>
                    <div className={styles.description}>
                      {description}
                    </div>
                    <div className={styles.featuresRow}>
                      <div className={styles.featuresHeader}>
                        Features
                      </div>
                      <div className={styles.features}>
                      feee
                      </div>
                    </div>
                  </div>
                  :
                  null
                }
            </div>
              :
              null
            }

          </div>

       

    )
}

export default AppLink