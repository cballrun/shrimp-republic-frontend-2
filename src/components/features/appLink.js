import styles from '../styles/appLink.module.css'
import arrow from '../images/triangle-cyan.png'

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
    
    const isActive = () => {
      console.log("Active var", active)
      console.log("index var", index)

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
        <div className={styles.link}>
            <div className={styles.titleRow}>
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
                <div className={styles.description}>
                  {description}
                </div>
                :
                null
              }
        </div>

    )
}

export default AppLink