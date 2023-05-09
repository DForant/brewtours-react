import React from 'react'

/* Media Imports */
import videoMp4 from '../img/170628_001.mp4'
import videoWebm from '../img/170628_001.webm'
import person1 from '../img/person1.jpg'
import person2 from '../img/person2.jpg'
import person1Large from '../img/person1-large.jpg'
import person2Large from '../img/person2-large.jpg'

const Stories = () => {
  return (
    <section class="section-stories">
    <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
            <source src={videoMp4} type="video/mp4"/>
            <source src={videoWebm} type="video/webm"/>
            Your browser is not Supported!
        </video>
    </div>
    <div class="center-text margin-bottom-big">
        <h2 class="heading-secondary">
            What people are saying
        </h2>
    </div>
    
    <div class="row">
        <div class="story">
            <figure class="story__shape">
                <img srcset={`${person1} 600w, ${person1Large} 2000w`}
                     sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                    src={person1} 
                    alt="Person at a table" 
                    class="story__img" />
                <figcaption class="story__caption story__caption--review-1">
                    Mary Smith
                </figcaption>                            
            </figure>
            <div class="story__text">
                <h3 class="heading-tertiary margin-bottom-small story__heading">
                    I have a new appreciation for Craft Beer
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, porro, quo, atque, a itaque nemo commodi reiciendis cum provident minima exercitationem dignissimos aspernatur dolor placeat quis dolore est omnis mollitia veritatis eum consectetur fugit iusto animi repudiandae neque molestias quia ducimus eius repellat esse. Quae, quos, ab, libero, qui laboriosam accusantium suscipit porro fugiat nihil eos aperiam deserunt ipsum pariatur.
                </p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="story">
            <figure class="story__shape">
                <img srcset={`${person2} 600w, ${person2Large} 2000w`}
                     sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                    src={person2} 
                    alt="Person at a table" 
                    class="story__img" />
                <figcaption class="story__caption story__caption--review-2">
                    Dwayne Philips
                </figcaption>
                
            </figure>
            <div class="story__text">
                <h3 class="heading-tertiary margin-bottom-small story__heading">
                    What a great birthday present from my wife 
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, porro, quo, atque, a itaque nemo commodi reiciendis cum provident minima exercitationem dignissimos aspernatur dolor placeat quis dolore est omnis mollitia veritatis eum consectetur fugit iusto animi repudiandae neque molestias quia ducimus eius repellat esse. Quae, quos, ab, libero, qui laboriosam accusantium suscipit porro fugiat nihil eos aperiam deserunt ipsum pariatur.
                </p>
            </div>
        </div>
    </div>
    
    <div class="center-text margin-top-huge">
        <a href="reviews.php" class="btn btn--brown">See all reviews</a>
    </div>
    </section>    
  )
}

export default Stories