import React from 'react'

/* Media Imports */
import bookBack from '../img/beer-7.jpg'

const book = () => {
  return (
    <section className="section-book">
        <div className="row">
            <div className="book"
                style={{backgroundImage: `url(${bookBack})`}}
            >
                <div className="book__form">
                    <form action="placeholder.php" className="form">
                        <div className="margin-bottom-medium">
                            <h2 className="heading-secondary">
                                Start booking now
                            </h2>
                        </div> 

                        <div className="form__group margin-bottom-medium">
                            <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                            <label for="name" className="form__label">Full Name</label>
                        </div>

                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="Email" id="email" required />
                            <label for="email" className="form__label">Email Address</label>
                        </div>
                        
                        <div className="form__group">
                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="small" name="size" />
                                <label for="small" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                    Small tour group
                                </label>
                            </div>
                            
                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="large" name="size" />
                                <label for="large" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                    Large tour group
                                </label>
                            </div>                                    
                        </div>
                        
                        <div className="form__group">
                            <button className="btn btn--brown">
                                Next Step &rarr;
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default book