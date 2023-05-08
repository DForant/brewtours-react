import React from 'react'

const Navbar = () => {
    return ( 
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>        
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="index.php" className="navigation__link">Return Home</a></li>
                    <li className="navigation__item"><a href="about.php" className="navigation__link">About Brewtours</a></li>
                    <li className="navigation__item"><a href="tours.php" className="navigation__link">View All Tours</a></li>
                    <li className="navigation__item"><a href="reviews.php" className="navigation__link">Reviews</a></li>
                </ul>
            </nav>
        </div>        
    )
}

export default Navbar