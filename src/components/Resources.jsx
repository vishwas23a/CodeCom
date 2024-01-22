import React, { useState } from 'react'
import './Resources.css'
import vsir1 from '../components/images/vsir1.png'
import vsir2 from '../components/images/vsir2.png'
import vsir3 from '../components/images/vsir3.png'
import chai1 from '../components/images/chai1.png'
import chai2 from '../components/images/chai2.png'
import chai3 from '../components/images/chai3.png'
import apna1 from '../components/images/apna1.png'
import apna2 from '../components/images/apna2.png'
import apna3 from '../components/images/apna3.png'
import harry1 from '../components/images/harry1.png'
import harry2 from '../components/images/harry2.png'
import harry3 from '../components/images/harry3.png'






import youtube from '../components/images/youtube.png'
export default function Resources() {
 // 1st image
  const images = [vsir1, vsir2,vsir3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
//2nd image
  const images2 = [apna1, apna2,apna3];
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const nextSlide2 = () => {
    setCurrentIndex2((currentIndex2 + 1) % images2.length);
  };

  const prevSlide2 = () => {
    setCurrentIndex2((currentIndex2 - 1 + images2.length) % images2.length);
  };

//3rd image

const images3 = [chai1, chai2,chai3];
const [currentIndex3, setCurrentIndex3] = useState(0);

const nextSlide3 = () => {
  setCurrentIndex3((currentIndex3 + 1) % images3.length);
};

const prevSlide3 = () => {
  setCurrentIndex3((currentIndex3 - 1 + images3.length) % images3.length);
};

//4th image

const images4 = [harry1, harry2,harry3];
const [currentIndex4, setCurrentIndex4] = useState(0);

const nextSlide4 = () => {
  setCurrentIndex4((currentIndex4 + 1) % images4.length);
};

const prevSlide4 = () => {
  setCurrentIndex4((currentIndex4 - 1 + images4.length) % images4.length);
};




  return (
    <div className='resourcescont'>
        <div className="rescont">
      <div className="youlink">
      <div className="linkcont1">
      <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Image ${index + 1}`} />

          </div>
        ))}

      </div>

      <button className="arrow left" onClick={prevSlide}>&#9665;</button>
      <button className="arrow right" onClick={nextSlide}>&#9655;</button>
    </div>

      </div>
      <div className="linkcont2">
      <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex2 * 100}%)` }}>
        {images2.map((image2, index2) => (
          <div key={index2} className="slide">
            <img src={image2} alt={`Image2 ${index2 + 1}`} />

          </div>
        ))}

      </div>

      <button className="arrow left" onClick={prevSlide2}>&#9665;</button>
      <button className="arrow right" onClick={nextSlide2}>&#9655;</button>
    </div>
     
      </div>
      <div className="linkcont3">

      <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex3 * 100}%)` }}>
        {images3.map((image3, index3) => (
          <div key={index3} className="slide">
            <img src={image3} alt={`Image3 ${index3 + 1}`} />

          </div>
        ))}

      </div>

       <button className="arrow left" onClick={prevSlide3}>&#9665;</button>
      <button className="arrow right" onClick={nextSlide3}>&#9655;</button>
    </div> 
      </div>
      <div className="linkcont4">

      <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex4 * 100}%)` }}>
        {images4.map((image4, index4) => (
          <div key={index4} className="slide">
            <img src={image4} alt={`Image4 ${index4 + 1}`} />

          </div>
        ))}

      </div>

       <button className="arrow left" onClick={prevSlide4}>&#9655;</button>
      <button className="arrow right" onClick={nextSlide4}>&#9655;</button> 
    </div> 
      </div>
     
      
        </div>
        <div className="linkname">

       <div className='you1'><a href="https://youtube.com/@drvipinclasses?si=kp4P_R4DTI3Wklzp" target=' _blank'><img src={youtube} alt="" /><h2>
          Dr Vipin Classes</h2></a></div> 
        <div className='you2'><a href="https://youtube.com/@ApnaCollegeOfficial?si=My2Vvo3a7qFTt_FD" target='_blank'> <img src={youtube} alt="" /> <h2 >Apna College</h2></a></div> 
        <div className='you3'><a href="https://youtube.com/@chaiaurcode?si=wwCcP0Z8MH-3JCeh" target='_blank'><img src={youtube} alt="" /> <h2 >Chai Aur Code</h2></a></div>  
        <div className='you4'><a href="https://youtube.com/@CodeWithHarry?si=RGdqj6bctb_m_8w_" target='_blank'> <img src={youtube} alt="" /><h2 >Code With Harry</h2></a></div> 

        </div>
        
      </div>
    
      
    </div>
  )
}
