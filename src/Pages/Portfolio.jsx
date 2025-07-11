import React from 'react';
import Card from '../components/Card';
import p1 from '../assets/imgs/p1.jpg';
import p2 from '../assets/imgs/p2.jpg';
import p3 from '../assets/imgs/p3.jpg';
import p4 from '../assets/imgs/p4.jpg';
import p5 from '../assets/imgs/p5.jpg';
import p6 from '../assets/imgs/p6.jpg';
import p7 from '../assets/imgs/p7.jpg';
import p8 from '../assets/imgs/p8.jpg';
import p9 from '../assets/imgs/p9.jpg';
import p10 from '../assets/imgs/p10.jpg';
import p11 from '../assets/imgs/p11.jpg';
import p12 from '../assets/imgs/p12.jpg';
import p13 from '../assets/imgs/p13.jpg';
import p14 from '../assets/imgs/p14.jpg';
import p15 from '../assets/imgs/p15.jpg';
import p16 from '../assets/imgs/p16.jpg';
import p17 from '../assets/imgs/p17.jpg';
import p18 from '../assets/imgs/p18.jpg';
import p19 from '../assets/imgs/p19.jpg';
import p20 from '../assets/imgs/p20.jpg';
const Portfolio = () => {
    const cardData = [
        { imageSrc: p1, overlayText: "Winter City Lights" },
        { imageSrc: p2, overlayText: "Summer at a Private Residence" },
        { imageSrc: p3, overlayText: "Autumn at Chiaga Vinary" },
        { imageSrc: p4, overlayText: "Winter in the Mountains" },
        { imageSrc: p5, overlayText: "Spring in Central Park" },
        { imageSrc: p6, overlayText: "Autumn Leaves in Kyoto" },
        { imageSrc: p7, overlayText: "Summer Beach at Malibu" },
        { imageSrc: p8, overlayText: "Summer at Field Meusam" },
        { imageSrc: p9, overlayText: "Spring Blossoms in Tokyo" },
        { imageSrc: p10, overlayText: "Summer Nights in Paris" },
        { imageSrc: p11, overlayText: "Autumn Forest Trails" },
        { imageSrc: p12, overlayText: "Winter Festivities" },
        { imageSrc: p13, overlayText: "Summer Garden Party" },
        { imageSrc: p14, overlayText: "Autumn Vineyard Views" },
        { imageSrc: p15, overlayText: "Winter at the Lodge" },
        { imageSrc: p16, overlayText: "Spring at the Farm" },
        { imageSrc: p17, overlayText: "Summer Resort Retreat" },
        { imageSrc: p18, overlayText: "Autumn Harvest Festival" },
        { imageSrc: p19, overlayText: "Winter WonderLand" },
        { imageSrc: p20, overlayText: "Springtime in the Countryside" }
      ];
    

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 ">
            <Card imageSrc={card.imageSrc} overlayText={card.overlayText} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
