import Img1 from '../../images/img1.jpg';
import Img2 from '../../images/img2.jpg';
import Img3 from '../../images/img3.jpg';
import Img4 from '../../images/img4.jpg';
import Img5 from '../../images/img5.jpg';
import Img6 from '../../images/img6.jpg';
import Perfil from '../Perfil/Perfil';
import Equipe from '../Equipe/Equipe';

import './Main.css';


const Main = () => {
    return (
        <main>
            <Equipe titulo={'Caminho da Vontade'} img1={Img1} nome={"Mago"} img2={Img2} nome2={"Sacerdotisa"} img3={Img3} nome3={"Imperatriz"}/>
            <Equipe titulo={'Caminho do Poder'} img1={Img4} nome={"Eremita"} img2={Img5} nome2={"Imperador"} img3={Img6} nome3={"Força"}/>
        </main> 
    )
}

export default Main; 