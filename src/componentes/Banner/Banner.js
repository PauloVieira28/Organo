import imagensBanner from '../../imagens/banner.png';
import '../Banner/Banner.css'
function Banner() {
    return(
        <header className='Banner'>
            <img src={imagensBanner}
            alt="Bannerprincipal da pagina do Organo"/>
        </header>
    )
}

export default Banner;