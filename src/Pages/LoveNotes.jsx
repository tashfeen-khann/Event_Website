// import 'bootstrap/dist/css/bootstrap.min.css';
// import c1 from '../assets/imgs/c1.jpg';
// import c2 from '../assets/imgs/c2.jpg';
// import c3 from '../assets/imgs/c3.jpg';
// import c4 from '../assets/imgs/c4.jpg';

// const LoveNotes = () => {
//   return (
//     <div className="container">
//       <div className="row text-center">
//         <div className="col-md-6">
//           <img
//             src={c1}
//             alt="Testimonial 1"
//             className="img-fluid mb-3 h-50"
//           />
//           <p>
//             From the very beginning of working with Andrea and the LK team it
//             was incredible. We keep staring at p4tures because it was just so
//             flawless of a weekend from start to finish.
//             <br />
//             <strong>- Amelia & Tim</strong>
//           </p>
//         </div>
//         <div className="col-md-6">
//           <img
//             src={c2}
//             alt="Testimonial 2"
//             className="img-fluid mb-3"
//           />
//           <p>
//             A quick note to once again say thank you for all of your always
//             cheerful help and guidance in creating, organizing, and overseeing
//             Ellie and John's wedding.
//             <br />
//             <strong>- Holly (Mother of the Bride)</strong>
//           </p>
//         </div>
//       </div>

//       <div className="row text-center">
//         <div className="col-md-6">
//           <img
//             src={c3}
//             alt="Testimonial 3"
//             className="img-fluid mb-3"
//           />
//           <p>
//             We wanted to send you a huge thank you for quite literally making
//             the wedding of our dreams possible! Everything was so perfectly
//             executed.
//             <br />
//             <strong>- Client Name</strong>
//           </p>
//         </div>
//         <div className="col-md-6">
//           <img
//             src={c4}
//             alt="Testimonial 4"
//             className="img-fluid mb-3"
//           />
//           <p>
//             Wedding planning for an engaged couple is practically a second job
//             in itself, but Carolyn made sure that planning was seamless and
//             stress-free.
//             <br />
//             <strong>- Client Name</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default  LoveNotes;


import React from 'react'
import Notes from '../components/Notes'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/notes.css';
import c1 from '../assets/imgs/c1.jpg';
import c2 from '../assets/imgs/c2.jpg';
import c3 from '../assets/imgs/c3.jpg';
import c4 from '../assets/imgs/c4.webp';
import c5 from '../assets/imgs/c5.jpg';
import HeroSection from '../components/HeroSection';
import p4 from '../assets/imgs/p4.jpg';


// Array of images

const LoveNotes = () => {
  const imagesSet2= [p4];
  return (
    <>
    <div>
 <HeroSection images={imagesSet2} /></div>
      
    <div className="testimonial-container">
      <Notes
        image={c1}
        text="From the very beginning of working with Andrea and the LK team it was incredible. We keep staring at p4tures because it was just so flawless of a weekend from start to finish. We moved to London mid wedding planning and had zero hesitation knowing that Andrea was taking care of it all from afar. She even got a shout out in the FOG speech (and he is a man of few words). Andrea was patient, thoughtful, creative, real, resourceful, kind and SO FUN to work with. I’m sad it’s over in part because I thoroughly enjoyed chatting and working with Andrea. She knew what we needed without us even having to. She’s truly THE BEST."
        name="Amelia & Tim"
      />
      <Notes
        image={c2}
        text="A quick note to once again say thank you for all of your always cheerful help and guidance in creating, organizing, and overseeing Ellie and John's wedding. You and your team didn't miss anything--every detail was covered and the entire weekend went so smoothly. I truly enjoyed working with you and I had a wonderful time! Thank you for your constant smile and for making the whole experience from the first zoom call to the farewell breakfast a real pleasure. All the best!"
        name="Holly (Mother of the Bride)"
      />
      <Notes
        image={c3}
        text="I cannot say enough about Lauren and her team. My daughter and her fiancé are living out of the country and I do not know how we would have managed without Lauren’s dedication to keeping us on track with contracts and help with finding the best vendors. Her kindness and efficiency made a complicated weekend with people coming in from out of the country so easy, as she took care of every detail. We think the world of her and my daughter had the most spectacular wedding!!"
        name="- Sue (Mother of the Bride)"
      />
      <Notes
        image={c4}
        text="I don't have the words to go into all the ways Carolyn and her team were beyond phenomenal, and I would like to thank her for all that she did for us and for our family. So many things could have gone wrong - i.e. COVID, tornados, intense families lol - but from day one Carolyn was professional, in control, kind, supportive, honest, transparent and just a generally lovely person to be working with. Our wedding was EXACTLY what we wanted and we couldn't be happier."
        name="- Alyssia & Jack"
      />
      <Notes
        image={c5}
        text="Carolyn was an absolute dream to work with on our wedding. I've honestly uttered two phrases over and over:
1. Carolyn is the best part about the wedding
2. Thank God Carolyn Flueckiger was born

We are big ideas/big p4ture type of people and without Carolyn we could have never pulled off our wedding. She took our big ideas and perfectly executed our dream into a reality. The hundreds of emails, coordination of all the vendors, the timelines, joining us at all of the vendor meetings, the last minute changes/updates and her mind reading abilities when I couldn't articulate properly what I wanted. Those things were all before the wedding day, but her true magic is how she handled the actual day of the wedding, I'm sure there's a million things I don't even know she did behind the scenes. EVERY DETAIL WAS COVERED PERFECTLY!"
        name="- Alyssia & Jack"
      />
    </div>
    </>
  )
}

export default LoveNotes
