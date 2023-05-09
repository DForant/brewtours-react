import React from 'react'

/* Image imports */
import logo1x from '../img/logo-1x.gif'
import logo2x from '../img/logo-2x.gif'
import craftBeer from '../img/Craft-Beer.jpg'

const Header = () => {

    /* 
        We need to specify the linear background color here because it
        involves an image that needs to be imported. 
    */

    return (
        <header class="header header--home" 
            style={{
                backgroundImage: `url(${craftBeer})`
            }} 
        >
            <div class="header__logo-box">    
            <img srcset={`${logo1x} 600w, ${logo2x} 2000w`}
                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                src={logo1x} 
                alt="Brewtours Logo" 
                class="header__logo" />
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--sub">Brewery Tours and Pub Crawls</span>
                </h1>
                <a href="tours.php" class="btn btn--white">Discover Our Tours</a>
            </div>
        </header>
    )
}

export default Header
