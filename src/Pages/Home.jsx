import HeroSection from "../components/HeroSection"
import Text from "../components/Text"
import pic2 from '../assets/imgs/pic2.jpg';
import pic from '../assets/imgs/pic.jpg';
import pic3 from '../assets/imgs/pic3.jpg';
import pic4 from '../assets/imgs/pic4.jpg';
import pic5 from '../assets/imgs/pic5.jpg';
import pic6 from '../assets/imgs/pic6.jpg';

// Array of images
const Home = () => {
  const imagesSet1 = [pic2, pic, pic3, pic4, pic5, pic6];

  return (
    <div>
    <HeroSection images={imagesSet1} />
      <Text/>
    
    </div>
  )
}

export default Home
