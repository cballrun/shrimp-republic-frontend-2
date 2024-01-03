import styles from '../styles/navBar.module.css'
import NavButton from './navButton'
import wahooLogo from '../images/wahooLogo.png'

function NavBar() {
  return (

      <div className={styles.navBar}>
        <img src={wahooLogo} alt="Wahoo Nav Bar Background" className={styles.wahooLogo} />
        <NavButton path={"/"} text={"HOME"}/>
        <NavButton path={"/projects"} text={"APPS"}/>
        <NavButton path={"/team"} text={"TEAM"}/>
      </div>


  )
}
export default NavBar 