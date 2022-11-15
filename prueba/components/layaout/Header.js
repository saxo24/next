
import { Menu } from "../atoms/Menu"
import { Logo } from "../atoms/Logo"
import styles from '../../styles/header.module.css'
export const Header = () => {
    const listMenu =['home','services','our project','gallery', 'about', 'contact']
  return (
    <section className={styles.header}>
        <Logo />
        <Menu listMenu={listMenu}/>
    </section>
  )
}
