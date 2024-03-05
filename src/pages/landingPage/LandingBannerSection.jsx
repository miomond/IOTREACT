// import React from 'react'
import "../Style/landingBannerSection.css";
import "../Style/landingHeroSection.css";
import img1 from "../../assets/card1.png";
import img2 from "../../assets/card2.png";
import img3 from "../../assets/Smart home-pana.svg";
function LandingBannerSection() {
  return (
    <>
      {/* banner */}
      <section className="banner   d-flex flex-column justify-content-center w-100" >
        {/* heder */}
        <h2 className="  ms-2"> our job is to ensure you have the luxury of the new technology  </h2>
        {/* line  */}
        <hr className="line-banner" />
        {/* start card */}
        <div className="parent-card d-flex flex-column flex-lg-row w-100   align-items-center justify-content-center ">
          {/* card1 */}
          <div className="card1">
            <img src={img1} alt="" />
          </div>
          <div className="card-content d-flex flex-column justify-content-center align-items-center">
            <h3>bring technology to your comfortable home</h3>
            <p>
              enjoy using your smart devices from one dashboard and be 
              one step away for every smart thing in your home to control
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>
        <div className="parent-card d-flex flex-column  flex-lg-row-reverse w-100   align-items-center justify-content-center  " id="card-reverse">
            {/* img card */}
                <div className="card1">
                    <img src={img2} alt="" />
                </div>
         {/* content card ,header, paragraph, button */}
          <div className="card-content d-flex flex-column justify-content-center align-items-center ">
            <h3>have the knowledge and the aware of what around you </h3>
            <p>
              with us you can enjoy reading all your house sensors 
              from one place no need to check every device in its on 
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>

        <div className="parent-card d-flex flex-column flex-lg-row w-100   align-items-center justify-content-center ">
          {/* card1 */}
          <div className="card1">
            <img src={img3} alt="" />
          </div>
                   {/* content card ,header, paragraph, button */}
          <div className="card-content d-flex flex-column justify-content-center align-items-center">
            <h3>bring the luxury technology to your home </h3>
            <p>
              with controlling smart devices you can make your smart device do what you 
              wish before you wish it or what you need before you need it 
            </p>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>

      </section>
    </>
  );
}

export default LandingBannerSection;
