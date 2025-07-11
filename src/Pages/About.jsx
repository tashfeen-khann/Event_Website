import '../css/TextSection.css';
import Card from '../components/Card';
import '../css/TextSection.css';
import person1 from '../assets/imgs/person1.avif';
import person2 from '../assets/imgs/person2.jpg';
import person3 from '../assets/imgs/person3.avif';


const About = () => {
  return (
    <>
    
 
    <div className='content-container '>
   
     <div className='slider-heading mb-4 fs-1'>About Us</div>
      <div className='description mb-3'>
     Every event we undertake is approached with a thoughtful design and planning process, allowing you to dream freely and assemble a trusted team to bring your vision to life. With our guidance, you can look forward to your special day with confidence, knowing that you and your loved ones will fully enjoy each precious moment of your celebration.
     </div>
     <div className='description mb-3'>
        Our passion lies in person1alizing this journey for you, not just through aesthetic elements, but by curating a team of exceptional professionals dedicated to exceeding your expectations. We are committed to understanding your ideas, addressing your concerns, and prioritizing your needs to ensure that your event is a true reflection of your vision.
        </div>
        <div className='description'>We are thrilled to introduce ourselves and eagerly anticipate the opportunity to learn more about you and your dreams!</div>
   

        <div class="row">
      <div class="col-lg-4">
        <Card imageSrc={person1} overlayText="Founder & Senior Event Consultant" /><span className='cursive fs-3 text-dark'>Tashfeen Khan</span>
      </div>
      <div class="col-lg-4">
        <Card imageSrc={person2} overlayText="Senior Event Consultant"/><span className='cursive fs-3 text-dark'>Sundus Khan</span>
      </div>
      <div class="col-lg-4">
        <Card imageSrc={person3} overlayText="Social Event Consultant"/><span className='cursive fs-3 text-dark'>Maniha Khan</span>
      </div>
    </div>
    </div>


    </>
  )
}


export default About
