
import styles from '../../styles/information.module.css'
export const Information = ({title,content,type=''}) => {
  return (
   <section className={styles.information}>
      <h2 className={`${styles['title']} ${styles[type]}`}>{title}</h2>
      <div className={styles.content}>{content}</div>
   </section>
  )
}
