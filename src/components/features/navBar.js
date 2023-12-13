import styles from '../styles/navBar.module.css'
import NavButton from './navButton'

function NavBar() {
  return (
    <div className={styles.navBar}>
        <NavButton path={"/home"} text={"Home"}/>
        <NavButton path={"/apps"} text={"Apps"}/>
        <NavButton path={"/shop"} text={"Shop"}/>
        <NavButton path={"/login"} text={"Login"}/>
    </div>

  )
}
export default NavBar 