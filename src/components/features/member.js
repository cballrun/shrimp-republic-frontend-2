import styles from '../styles/member.module.css'
import chaseHeadshot from '../images/chaseHeadshot.png'
import carterHeadshot from '../images/carterHeadshot.png'

function Member({member}) {
  const headshotDictionary = {
    "Chase Gaddis": chaseHeadshot,
    "Carter Ball": carterHeadshot
  }

  return (  
    <div className={styles.main}>
      <div className={styles.mainColumn}>
        <img src={headshotDictionary[member.name]} className={styles.headshot}/>
        <div className={styles.name}>
          {member.name}
        </div>
        <div className={styles.descriptionLocation}>
          {member.description}
        </div>
        <div className={styles.descriptionLocation}>
          {member.location} 
        </div>
      </div>
    </div>
  )
}

export default Member