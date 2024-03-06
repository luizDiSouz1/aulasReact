
import Img1 from '../../images/img1.jpg';
import Img2 from '../../images/img2.jpg';
import Img3 from '../../images/img3.jpg';
import Img4 from '../../images/img4.jpg';
import Img5 from '../../images/img5.jpg';
import Img6 from '../../images/img6.jpg';

import Perfil from '../Perfil/Perfil';

const Equipe = (props) => {
    return(
        <>
        <h1 className='t-center'> {props.titulo}</h1>
        <div className='perfis'>
            <Perfil img={props.img1} titulo={props.nome}/>
            <Perfil img={props.img2} titulo={props.nome2}/>
            <Perfil img={props.img3} titulo={props.nome3}/> 
        
        </div>
    </>
    )

}

export  default Equipe; 

/*const Equipe = (props) => {
    return (
        <>
        <h1 className='t-center'> {props.titulo}</h1>
            <div className='equipe'>
            <Equipe img={props.imagem} titulo={'Mago'}/>
        </div>

        </>
    )
}

export default Equipe; */


