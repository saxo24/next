import { useState } from 'react'
import styles from '../../styles/menu.module.css'
export const Menu = ({listMenu}) => {
    const [menu,setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu( !menu )
    }
  return (
      <>
          <button 
            onClick={ toggleMenu }
         className={styles.btn}>
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </button>
        <nav className={`${styles['cabecera']} ${menu?styles.isActive:''}`}>
        <ul className={styles.menul}>
        {listMenu.map((item,index)=>
            <li key={index} className={styles.item}>
                <a className={styles.link}> {item}</a>
            </li>
        )}
        </ul>
        </nav>

      </>
   
  )
}

{/* <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
<ul className="Cabecera-ul">
    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 1</a></li>
    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 2</a></li>
    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 3</a></li>
    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 4</a></li>
    <li className="Cabecera-li"><a href="#" className="Cabecera-a">Item 5</a></li>
</ul>
</nav> */}
