import Colaborador from '../Colaborador';
import '../Time/Time.css'

const Time = (props) => {

    const corSecundaria = {backgroundColor: props.corSecundaria}
    //const corPrimaria = {borderColor: props.corPrimaria}
    return(
        props.colaboradores.length > 0 &&
        <section className='time' style={corSecundaria}>
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}/>)}
            </div>
        </section>
    )
}

export default Time;