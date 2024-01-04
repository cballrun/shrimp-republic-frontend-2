import styles from '../styles/appLink.module.css'
import arrow from '../images/triangle-cyan.png'
import chessMeitoLogo from '../images/chessMeitoLogo.png'
import pTradeLogo from '../images/pTradeLogo.png'
import gameDriveLogo from '../images/gameDriveLogo.png'
import shoreCastsLogo from '../images/shoreCastsLogo.png'
import railsLogo from '../images/railsLogo.png'
import androidLogo from '../images/androidLogo.png'
import goJs from '../images/goJs.png'
import awsLogo from '../images/awsLogo.png'
import graphQlLogo from '../images/graphQlLogo.png'
import jsLogo from '../images/jsLogo.png'
import postgresLogo from '../images/postgresLogo.png'
import reactLogo from '../images/reactLogo.png'
import testFlightLogo from '../images/testFlightLogo.png'
import playStoreLogo from '../images/playStoreLogo.png'
import pythonLogo from '../images/pythonLogo.png'
import figmaLogo from '../images/figmaLogo.png'

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
    projectUrl,
    projectTools
  }) {
    const imageHash = {
      "ChessMeito": chessMeitoLogo,
      "Shorecasts": shoreCastsLogo,
      "P-Trade": pTradeLogo,
      "Game Drive": gameDriveLogo
    } 
    
    const toolsDictionary = {
      "Ruby on Rails": railsLogo,
      "AWS": awsLogo,
      "Go": goJs,
      "Android": androidLogo,
      "Google Play": playStoreLogo,
      "Test Flight": testFlightLogo,
      "JavaScript": jsLogo,
      "PostgreSQL": postgresLogo,
      "GraphQL": graphQlLogo,
      "React": reactLogo,
      "Python": pythonLogo,
      "Figma": figmaLogo
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
    const appFeatures = JSON.parse(features)
    console.log("Project Tools:", projectTools)
    return (
          <div className={styles.main}>
            {
              isActive() || active === 0 ?
            <div className={styles.link}>
              <div className={isActive() ? styles.activeTitleRow : styles.inactiveTitleRow}>
                <img src={imageHash[name]} className={isActive() ? styles.activeLogo : styles.inactiveLogo}/>
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
                    <div className={styles.featuresStageRow}>
                    <div className={styles.featuresRow}>
                      <div className={styles.featuresHeader}>
                        Features
                      </div>
                      <ul className={styles.features}>
                        {appFeatures.map((feature) => 
                          <li>
                            {feature}
                          </li>
                          )
                        }
                      </ul>
                    </div>
                    <div className={styles.stage}>
                      {`Stage - ${stage}`}
                    </div>
                  </div>
                    Project Tools
                    <div className={styles.toolsRow}>

                      {projectTools.map((projectTool) => 
                        <img src={toolsDictionary[projectTool.tool.name]} className={styles.toolLogo}/>
                      )}
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