// import { Children } from 'react/cjs/react.development'
import styles from '../../styles/appcontainer.module.css'
export default function AppContainer({children}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}