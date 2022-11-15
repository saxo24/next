
import Botton from '../../components/atoms/Botton'
import { Information } from '../molecules/Information'
import {AppContainer} from '../globals/AppContainer'
export const HomeBanner = ({title,content}) => {
  return (
        
    <section>
        <Information title={title} content={content}/>
        <Botton type="primary">send</Botton>
        <Botton type="secondary">contac us</Botton>
    </section>
        
  )
}
