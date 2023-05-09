import React from 'react'

/* Media Imports */
import logo1x from '../img/logo-1x.gif'
import logo2x from '../img/logo-2x.gif'

const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer__logo-box">
            
            <picture class="footer__logo">
                <a href="index.php">
                    <img srcset={`${logo1x} 450w, ${logo2x} 900w`}
                        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                        src={logo1x} 
                        alt="Brewtours Logo" 
                        class="footer__logo" />
                </a>
            </picture>
        </div>
        <div class="row">
            <div class="col-1-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="placeholder.php" class="footer__link">Company</a></li>
                        <li class="footer__item"><a href="placeholder.php" class="footer__link">Contact Us</a></li>
                        <li class="footer__item"><a href="placeholder.php" class="footer__link">Careers</a></li>
                        <li class="footer__item"><a href="placeholder.php" class="footer__link">Privacy</a></li>
                        <li class="footer__item"><a href="placeholder.php" class="footer__link">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-2">
                <p class="footer__copyright">
                    <a href="http://deanforant.com" class="footer__link footer__link--small">DFDesigns</a> &copy; 2023.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer