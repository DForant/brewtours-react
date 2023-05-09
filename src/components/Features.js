import React from 'react'

/* Image Imports */
import draftSystem from '../img/draft-system.jpg'

const Features = () => {
  return (
    <section className="section-features"
        style={{
            backgroundImage: `url(${draftSystem})`
        }}
    >
        <div className="row">   
            <div className="col-1-3">
                <div className="feature-box">
                    <i className="feature-box__icon fa-solid fa-trophy"></i>
                    <h3 className="heading-tertiary margin-bottom-small">Award winning brewmasters</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, praesentium, delectus ab nisi eaque eius asperiores est ratione repudiandae aspernatur nemo possimus nihil ad minus odit reiciendis aliquid? Et, quisquam!
                    </p>
                    <a href="brewmasters.php" className="btn-text">Meet the brewmasters</a>
                    <a href="guides.php" className="btn-text">Meet Our Guides/Drivers</a>
                    
                </div>
            </div>
            <div className="col-1-3">
                <div className="feature-box">
                    <i className="feature-box__icon fa-solid fa-calendar-days"></i>
                    <h3 className="heading-tertiary margin-bottom-small">Book a tour</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, praesentium, delectus ab nisi eaque eius asperiores est ratione repudiandae aspernatur nemo possimus nihil ad minus odit reiciendis aliquid? Et, quisquam!
                    </p>
                    <a href="tours.php" className="btn-text">Available Tours</a>                            
                </div>
            </div>
            <div className="col-1-3">
                <div className="feature-box">
                    <i className="feature-box__icon fa-solid fa-house"></i>
                    <h3 className="heading-tertiary margin-bottom-small">Participating brewerys and pubs</h3>
                    <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, praesentium, delectus ab nisi eaque eius asperiores est ratione repudiandae aspernatur nemo possimus nihil ad minus odit reiciendis aliquid? Et, quisquam!
                    </p>
                    <a href="breweries.php" className="btn-text">View Our Participating Breweries and Pubs</a>
                </div>
            </div>
        </div>                
    </section>
  )
}

export default Features