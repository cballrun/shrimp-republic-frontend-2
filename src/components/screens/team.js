import styles from '../styles/team.module.css'
import Header from '../features/header.js'
import Footer from '../features/footer.js'
import Member from '../features/member.js'
import membersData from '../data/membersData.js'

function Team() {  
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
      <Footer/>
    </div>
  )
}

export default Team