import React from 'react'
 
import Img0 from './marketing/image.jpg';
import Img1 from './marketing/image2.jpg';
import Img2 from './marketing/image3.jpg';




const LandingPage = () => {
    return (
        <div className='landing-div'>
            <h1> marketing services </h1>
            
            <div className='items'><img src={Img0} alt='#'/></div>
            <div className='items'><img src={Img1} alt='#'/></div>
            <div className='items'><img src={Img2} alt='#'/></div>
             <h2>Catch Some Vibes</h2>
        </div>
    )
}

export default LandingPage

