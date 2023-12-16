import styles from '../styles/navBar.module.css'
import NavButton from './navButton'

function NavBar() {
  return (

      <div className={styles.navBar}>
        <NavButton path={"/home"} text={"HOME"}/>
        <NavButton path={"/apps"} text={"APPS"}/>
        <NavButton path={"/shop"} text={"SHOP"}/>
        <NavButton path={"/login"} text={"LOGIN"}/>
      </div>


  )
}
export default NavBar 