import './styles/testimonials.scss';
import PedroPascalFoto from '../assets/img/testimonials/pedro-pascal.jpg';
import MoratFoto from '../assets/img/testimonials/morat.jpg';
import JuanLGuerraFoto from '../assets/img/testimonials/jlg.jpg';
import RaydenFoto from '../assets/img/testimonials/rayden.jpg';
const Testimonials = () => {
  
  return (
    <div className='testimonials-container'>
      <div className='testimonial-row-1'>
        <div className='testimonial-1'>
          <div className='paragraph-container'>
            <p className='testimonial-symbol'>"</p>
            <p className='-testimonial-paragraph'>
              Sint nostrud ipsum Lorem elit id ullamco magna sunt tempor deserunt. Laboris fugiat eu ut irure tempor duis ut ad nulla. Aliquip adipisicing aute nulla anim. Et excepteur nostrud cupidatat ea exercitation consequat nulla ex nisi veniam occaecat ipsum ad.
            </p>
          </div>
          <div className='testimonial-person-container'>
            <span className='testimonial-name'>
              Pedro Pascal
            </span>
            <img className='testimonial-image' src={PedroPascalFoto} alt ="pedro-testimonial"></img>
          </div>
        </div>
        <div className='testimonial-2'>
          <div className='paragraph-container'>
            <p className='testimonial-symbol'>"</p>
            <p className='-testimonial-paragraph'>
              Sint nostrud ipsum Lorem elit id ullamco magna sunt tempor deserunt. Laboris fugiat eu ut irure tempor duis ut ad nulla. Aliquip adipisicing aute nulla anim. Et excepteur nostrud cupidatat ea exercitation consequat nulla ex nisi veniam occaecat ipsum ad.
            </p>
          </div>
          <div className='testimonial-person-container'>
            <span className='testimonial-name'>
              Morat
            </span>
            <img className='testimonial-image' src={MoratFoto} alt ="pedro-testimonial"></img>
          </div>
        </div>
      </div>
      <div className='testimonial-row-2'>
        <div className='testimonial-3'>
          <div className='paragraph-container'>
            <p className='testimonial-symbol'>"</p>
            <p className='-testimonial-paragraph'>
              Sint nostrud ipsum Lorem elit id ullamco magna sunt tempor deserunt. Laboris fugiat eu ut irure tempor duis ut ad nulla. Aliquip adipisicing aute nulla anim. Et excepteur nostrud cupidatat ea exercitation consequat nulla ex nisi veniam occaecat ipsum ad. 
            </p>
          </div>
          <div className='testimonial-person-container'>
            <span className='testimonial-name'>
              Juan Luis Guerra
            </span>
            <img className='testimonial-image' src={JuanLGuerraFoto} alt ="pedro-testimonial"></img>
          </div>
        </div>
        <div className='testimonial-4'>
          <div className='paragraph-container'>
            <p className='testimonial-symbol'>"</p> 
            <p className='-testimonial-paragraph'>
              Sint nostrud ipsum Lorem elit id ullamco magna sunt tempor deserunt. Laboris fugiat eu ut irure tempor duis ut ad nulla. Aliquip adipisicing aute nulla anim. Et excepteur nostrud cupidatat ea exercitation consequat nulla ex nisi veniam occaecat ipsum ad.
            </p>
          </div>
          <div className='testimonial-person-container'>
            <span className='testimonial-name'>
              Rayden
              <img className='testimonial-image' src={RaydenFoto} alt ="pedro-testimonial"></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Testimonials;