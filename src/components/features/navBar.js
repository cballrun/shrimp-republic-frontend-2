import styles from '../styles/navBar.module.css'
import NavButton from './navButton'

function NavBar() {
  return (

      <div className={styles.navBar}>
        <NavButton path={"/"} text={"HOME"}/>
        <NavButton path={"/projects"} text={"APPS"}/>
      </div>


  )
}
export default NavBar 