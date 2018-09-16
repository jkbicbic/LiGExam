import React from 'react';
import './footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__center">
                <a className="footer__links" href="#">運営会社 </a>
                <a className="footer__links" href="#">個人情報保護について</a>
                <a className="footer__links link--right" href="#">©2016 Sample</a>
                <a className="footer__button-pagetop" href="#top"></a>
            </div>

        </footer>
    )
}

export default Footer