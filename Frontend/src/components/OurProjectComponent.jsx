import React from 'react'
import './OurProject.css'
// import fifthSvg from '../../../fullstackAssets/Lead Generation Landing page (Images)/pexels-fauxels-3182834.svg'
import secondSvg from '../../../fullstackAssets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-1.svg'
import thirdSvg from '../../../fullstackAssets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-2.svg'
import firstSvg from '../../../fullstackAssets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-3.svg'
// import fourthSvg from '../../../fullstackAssets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232.svg'

const OurProjectComponent = () => {
  return (
    <div className="background">
      <div className="header">
        Our Projects
      </div>
    
      <div className="content">
        We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
      </div>

      <div className="cards">
        <div className="first">
            <img src={firstSvg} alt="" className="firstImage" />
            <div className="firstheader">
                Consultation
            </div>
            <div className="firstdescription">
                Project Name,Location
            </div>
            <button className="firstbutton">Read More</button>
        </div>

        <div className="second">
            <img src={secondSvg} alt="" className="secondImage" />
            <div className="firstheader">
                Marketing
            </div>
            <div className="firstdescription">
                Project Name,Location
            </div>
            <button className="firstbutton">Read More</button>
        </div>

        <div className="third">
            <img src={thirdSvg} alt=""  className="thirdImage"/>
            <div className="firstheader">
                Design
            </div>
            <div className="firstdescription">
                Project Name,Location
            </div>
            <button className="firstbutton">Read More</button>
        </div>

        <div className="fourth">
            <img src={secondSvg} alt="" className="fourthImage"/>
            <div className="firstheader">
                Analyst
            </div>
            <div className="firstdescription">
                Project Name,Location
            </div>
            <button className="firstbutton">Read More</button>
        </div>
        <div className="fifth">
            <img src={thirdSvg} alt="" className="fifthImage"/>
            <div className="firstheader">
                Consultation
            </div>
            <div className="firstdescription">
                Project Name,Location
            </div>
            <button className="firstbutton">Read More</button>
        </div>
      </div>

    </div>
  )
}

export default OurProjectComponent
