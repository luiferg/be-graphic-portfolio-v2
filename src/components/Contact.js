import './styles/contact.scss';
import { ColorRing } from  'react-loader-spinner'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE;
const refForm = useRef();
const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs
    .sendForm(
      'default_service',
      templateId,
      refForm.current,
      publicKey
    )
    .then (
      () => {
        alert('¡Listo! Tu mensaje se ha enviado')
        window.location.reload(false);
      },
      () => {
        alert(':( no se ha podido enviar tu mensaje.')
      }
    )

}

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            Contáctame
          </h1>
          <p>
            Si te parece genial mi trabajo, no dudes en contactarme para juntos llevar tu marca y/o empresa al próximo nivel.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name="name" placeholder="Nombre" required/>
                </li>
                <li className='half'>
                  <input type="email" name="email" placeholder="Email" required/>
                </li>
                <li>
                  <input placeholder="Asunto" type="text" name= "subject" required/>
                </li>
                <li>
                  <textarea placeholder="Mensaje" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value="Enviar"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Liz Salcedo,<br/>
          España, <br/>
          13300 Valdepeñas <br/>
          <span>info@be-graphic.net</span>
          <span>lizethsv98@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[38.77011, -3.39081]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[38.77011, -3.39081]}>
              <Popup>¡Así es! Aquí vivo :)</Popup>
            </Marker>
          </MapContainer>
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

export default Contact