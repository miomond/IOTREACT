import './masterPost.css'
import heroBlog from "../../../assets/generative-ai-smart-home-interface-with-controlling-dwevice.jpg";
function MasterPost() {
  return (
    <div className=" parent-post d-flex flex-lg-row-reverse flex-wrap   h-auto justify-content-around     ">
    <div className="post  w-auto" >
      <img src={heroBlog} alt=""   />
    </div>
    <div className="content-post" style={{width:'600px'}}>
      <h1>
        Invest in the intelligence of your home, and enjoy an unparalleled
        life experience.
      </h1>
      <p>
      Elevate your living space with cutting-edge IoT technology, transforming your home into a smart
       sanctuary tailored to your lifestyle.  Unlock a new realm of possibilities,
       where innovation meets tranquility, enriching your everyday experiences like never before
      </p>
    </div>
  </div>
  )
}

export default MasterPost