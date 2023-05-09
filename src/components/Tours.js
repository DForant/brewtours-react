import React from 'react'

/* Image Imports */
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
    

const Tours = () => {
  return (
    <section className="section-tours">
        <div className="center-text margin-bottom-big">
            <h2 className="heading-secondary">
                Most Popular Tours
            </h2>
        </div> 
        
        <div className="row">
            <div className="col-1-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1"
                            style={{backgroundImage: `url(${card1})`}}
                        >
                            &nbsp;
                        </div>
                        <div className="card__heading">
                            <div className="card__heading-span card__heading-span--1">Boston Pub Crawl</div>
                        </div>
                        <div className="card__details">
                            <ul>
                                <li>Walking tour</li>
                                <li>5 bars</li>
                                <li>10 drink vouchers</li>
                                <li>Lunch or Dinner Provided</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back--1">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$125</p>
                            </div>
                            <a href="#popup-1" className="btn btn--white">Book Now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--2"
                            style={{backgroundImage: `url(${card2})`}}
                        >
                            &nbsp;
                        </div>
                        <div className="card__heading">
                            <div className="card__heading-span card__heading-span--2">Northern RI Brewery Tour</div>
                        </div>
                        <div className="card__details">
                            <ul>
                                <li>Bus Tour</li>
                                <li>5 brewerys</li>
                                <li>10 drink vouchers</li>
                                <li>Lunch or Dinner Provided</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back--2">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$65</p>
                            </div>
                            <a href="#popup-2" className="btn btn--white">Book Now!</a>
                        </div>
                    </div>
                </div>                        
            </div>
            <div className="col-1-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--3"
                            style={{backgroundImage: `url(${card3})`}}
                        >
                            &nbsp;
                        </div>
                        <div className="card__heading">
                            <div className="card__heading-span card__heading-span--3">Southern RI brewery tour</div>
                        </div>
                        <div className="card__details">
                            <ul>
                                <li>Jeep Tour</li>
                                <li>6 Brewerys</li>
                                <li>12 drink vouchers</li>
                                <li>Lunch or Dinner Provided</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back card__side--back--3">
                        <div className="card__cta">
                            <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$85</p>
                            </div>
                            <a href="#popup-3" className="btn btn--white">Book Now!</a>
                        </div>
                    </div>
                </div>                        
            </div>
        </div>
        
        <div className="center-text margin-top-huge">
            <a href="tours.php" className="btn btn--brown">Discover all Tours</a>
        </div>
    </section>
  )
}

export default Tours