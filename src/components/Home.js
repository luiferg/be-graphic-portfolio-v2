import { Link } from 'react-router-dom'
import LizPicture from '../assets/icons/Foto-Liz.png'
import HolaLogo from '../assets/icons/foto-liz/Hola-logo.svg'
import SoyLogo from '../assets/icons/foto-liz/Soy-logo.svg'
import LizethLogo from '../assets/icons/foto-liz/Lizeth-logo.svg'
import SalcedoLogo from '../assets/icons/foto-liz/Salcedo-logo.svg'
import './styles/home.scss';
import Testimonials from './Testimonials'
import { ColorRing } from  'react-loader-spinner'

const Home = () => {

  

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <img src={HolaLogo} className='hola-logo' alt="hola-logo" />
          <img src={LizPicture} className='foto-logo' alt="foto-logo" />
          <img src={SoyLogo} className='soy-logo' alt="soy-logo" />
          <img src={LizethLogo} className='lizeth-logo' alt="lizeth-logo" />
          <img src={SalcedoLogo} className='salcedo-logo' alt="salcedo-logo" />
          <h2 className='graphic-designer'>DISEÑADORA GRÁFICA</h2>
          <Link to="/contact" className= 'flat-button'>Contáctame</Link>
        </div>
        <Testimonials/>
      </div>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#35BCAF', '#F4B645', '#F4D0C2', '#EF7742', '#ED9E99']}
      />
    </>
  )
}

export default Home