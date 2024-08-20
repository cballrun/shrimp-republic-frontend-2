import styles from '../styles/about.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import Member from '../features/member.js'
import membersData from '../data/membersData.js'

function About() {  
  return(
    <div className={styles.main}>
      <Header/>
        <div className={styles.members}>
          {
            membersData.map((member) => 
              <Member member={member}/>
            )
          }
        </div>
        <div className={styles.infoColumn}>
              <text className={styles.infoHeader}>
                Contact Information
              </text>
              <text className={styles.infoText}>
                (850) 582-2223
              </text>
              <text className={styles.infoText}>
                3165 Grand Ave APT 407
              </text>
              <text className={styles.infoText}>
                Pinellas Park, FL 33782
              </text>
              <text className={styles.infoText}>
                carter@shrimp-republic.com
              </text>
            </div>
      <Footer/>
    </div>
  )
}

export default About