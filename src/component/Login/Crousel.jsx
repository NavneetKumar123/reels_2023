import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Crousel() {
  return (
    <div className="crousel_container">
     <Carousel>
                <div className="crousel_wrapper">
                    <img src="ss1.png" className="crousel_image" />
                    
                </div>
                <div className="crousel_wrapper">
                    <img src="ss2.png" className="crousel_image"/>
                    
                </div>
                <div className="crousel_wrapper">
                    <img src="ss3.png" className="crousel_image"/>
                    
                </div>
                <div className="crousel_wrapper">
                    <img src="ss4.png" className="crousel_image"/>
                    
                </div>
            </Carousel>
    </div>
  )
}

export default Crousel
