import React from 'react'

/* Image imports */
import beer1 from '../img/beer-1.jpg'
import beer1Large from '../img/beer-1-large.jpg'
import beer2 from '../img/beer-2.jpg'
import beer2Large from '../img/beer-2-large.jpg'
import beer3 from '../img/beer-3.jpg'
import beer3Large from '../img/beer-3-large.jpg'


const About = () => {
  return (
    <section className="section-about">
        <div className="center-text margin-bottom-big">
            <h2 className="heading-secondary">
                Guided Brewery Tours for the Beer lover in all of us
            </h2>
        </div>
        <div className="row">
            <div class="col-1-2">
                <h3 class="heading-tertiary margin-bottom-small">
                    Explore the best in local craft brewing.
                </h3>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, eius, molestiae! Temporibus atque perspiciatis provident vitae recusandae consequuntur aliquam ullam in iusto nostrum. Alias ullam a expedita illo nemo in!
                </p>
                <h3 class="heading-tertiary margin-bottom-small">
                    All Tours include experienced guide and designated driver. 
                </h3>                        
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, repellat, dolorum, eligendi omnis. consectetur adipisicing elit. Ducimus, esse voluptates praesentium incidunt laudantium.
                </p>
                <a href="about.php" class="btn-text">
                    Learn More &rarr;
                </a>
            </div>  
            <div class="col-1-2">
                <p class="composition">
                    <img srcset={`${beer1} 300w, ${beer1Large} 1000w`}
                        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                        src={beer1} 
                        alt="Bartender pouring beer" 
                        class="composition__photo composition__photo--p1"
                    />
                
                    <img srcset={`${beer2} 300w, ${beer2Large} 1000w`}
                        sizes="(max-width: 900px) 20vw, (max-width: 900px) 30vw, 300px"
                        src={beer2} 
                        alt="Brewmaster displaying hops" 
                        class="composition__photo composition__photo--p2" 
                    />
                    <img srcset={`${beer3} 300w, ${beer3Large} 1000w`}
                        sizes="(max-width: 900px) 20vw, (max-width: 900px) 30vw, 300px"
                        src={beer3} 
                        alt="Tap room" 
                        class="composition__photo composition__photo--p3" 
                    />
                </p>
            </div>
        </div>                   
    </section>
  )
}

export default About