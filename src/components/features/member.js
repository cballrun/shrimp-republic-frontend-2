import styles from '../styles/member.module.css'
import chaseHeadshot from '../images/chaseHeadshot.png'
import carterHeadshot from '../images/carterHeadshot.png'

function Member({member}) {
  const headshotDisctionary = {
    "Chase Gaddis": chaseHeadshot,
    "Carter Ball": carterHeadshot
  }

  return (  
    <div className={styles.main}>
      <div className={styles.imageColumn}>
        <img src={headshotDisctionary[member.name]} className={styles.headshot}/>
        {member.name}
        <div className={styles.description}>
          {member.description}
        </div>
        <div className={styles.location}>
          {member.location} 
        </div>
      </div>
    </div>
  )
}

export default Member