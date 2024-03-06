import Mago from "../../images/img1.jpg"
import './Descricao.css'

const Descricao = () => {
        return(
        <> 
           <h1 className="titulo"> Mago </h1>

        <div className='main'>
            <div >
                <div>
                    <img className='img1' src= {Mago} alt="Foto de Mago"/>
                </div>

                <p>  

                    Iniciativa, intencionalidade, aspiração.
                    <br/>
                    <br/>
                    Todo o simbolismo denota muitas possibilidades, multiplas idéias, intenso livre arbitrio
                    ,auto confiança, pericia, destreza, inventividade e trabalho, mas pouquissima conclusão.
                    <br/>
                    <br/>
                    Dessa forma ao cair essa carta na jogada, indica que todos os caminhos estão abertos para inicio 
                    de projetos e o consulente conta com todas as ferramentas  necessárias para prosseguir sem medo.
                    <br/>
                    <br/>
                    Porém é preciso de fato se empenhar em concluir as ações já que existe uma forte tendência a dispersão 
                    e perda de impeto.

                </p>

            </div>
        </div>
        </> 
        )
}

export default Descricao;