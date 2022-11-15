
import styles from '../../styles/btn.module.css'
export default function Botton({type,children}) {
  return (
    <button className={`${styles['btn']} ${styles[type]}` } >
        {children}
    </button>
  )
}
