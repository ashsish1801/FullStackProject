import React from 'react';
import '../components/Banner.css';
import banner from '../../../fullstackAssets/Lead Generation Landing page (Images)/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg'
import Form from './Form';
function Banner(){
  return (
    <div className='banner'>
      <>
      <div>
        <div className='FORM'>
          <Form/>
        </div>
       <img src={banner} alt="cantLoad" className='BannerImage'/>
       <div className='tag'>
       Consultation,
       Design,& Marketing
       </div>
      </div>
      </>
    </div>
  )
}

export default Banner