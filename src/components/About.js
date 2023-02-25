import './styles/about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { ColorRing } from  'react-loader-spinner'

const About = () => {
  return (
    <>

      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            Sobre mí
          </h1>
          <p>
          Soy graduada de la Escuela de Artes y Letras en Bogotá en el año 2020. Apasionada de la literatura, el diseño y el interiorismo, disfruto de plasmar ideas en diferentes espacios. Me considero una persona creativa, entusiasta y proactiva. Me encanta conocer las tendencias y trabajar de la mano de ellas para lograr resultados dinámicos y con carácter.
          </p>
          <p>
          Tengo énfasis en diseño editorial pero mi experiencia me ha llevado a desarrollar mayores habilidades en el diseño para RRSS y el diseño web.
          </p>
        </div>
        <div className='experience-container'>
          <div className='experience-text-zone'>
            <h2>Experiencia</h2>
            <h3>Diseñadora Gráfica 2021 - 2023</h3>
            <h4>Funlab Design Experience</h4>
            <ul>
              <li>
                Diseño y maquetación de piezas digitales y editoriales.
              </li>
              <li>
                Diseño web y experiencia de usuario.
              </li>
              <li>
                Creación de línea gráfica para marcas.
              </li>
            </ul>

            <h3>Diseñadora Gráfica 2020 - 2021</h3>
            <h4>Sophia Extensa</h4>
            <ul>
              <li>
                Diseño y maquetación de piezas digitales.
              </li>
            </ul>

            <h3>Diseñadora Gráfica 2019 - 2020</h3>
            <h4>Triada Group</h4>
            <ul>
              <li>
                Diseño y maquetación de piezas digitales y editoriales.
              </li>
              <li>
                Creación de copys y redacción de textos.
              </li>
              <li>
                Liderazgo de proyectos de diseño.
              </li>
            </ul>
            <div className='icon-zone'>
              <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lizeth-salcedo-vergara-755644160/'>
                <FontAwesomeIcon className='about-icon' icon = {faLinkedin} color = "#FFFFFF" />
              </a>
              <a target="_blank" rel="noreferrer" href='https://wa.me/34666615881'>
              <FontAwesomeIcon className='about-icon' icon = {faSquareWhatsapp} color = "#FFFFFF" />
              </a>
              <a target="_blank" rel="noreferrer" href='https://be-graphic.net/docs/CV-2023-Liz-Salcedo.pdf'>
                <FontAwesomeIcon className='about-icon' icon = {faAddressCard} color = "#FFFFFF" />
              </a>
            </div>
          </div>
        </div>
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

export default About