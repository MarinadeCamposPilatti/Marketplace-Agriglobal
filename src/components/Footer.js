import './Footer.css';
import LogoFooter from './assets/logo-footer.png';
import TitleFooter from './assets/title-footer.png';

const Footer = () => {
    return(
        <div >
            <section className="Footer">

                <div className='first-part-footer'>
                    <div className='logo-footer'>
                        <img className='logo-footer-image' src={LogoFooter} alt=""/>
                        <img className='title-footer' src={TitleFooter} alt=""/>
                    </div>
                    
                    <p className='register'>HAVEN'T YOU 
                    REGISTERED YET?</p>

                    <p className='register-description'>Select 
                    the type of profile with which you want to 
                    be part of the AgriGlobal Market 
                    Community</p>
                    
                    <div className='register-options'>
                        <a href="#">
                            <button className='register-buttons'>Buyer</button>
                        </a>
                        
                        <a href="#">
                            <button className='register-buttons'>Provider</button>
                        </a>
                    </div>
                
                </div>

                <div className='second-part-footer'>
                    
                    <div className='contact'>

                        <div className='adress-and-email'>
                            <h3>CONTACT US</h3>
                            
                            <div className='adress-and-email-icons'>
                                
                                <div className='each-adress-email-icon'>
                                    <div className='icon-circle'>
                                        <svg class="css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddLocationAltOutlinedIcon">
                                            <path d="M20 1v3h3v2h-3v3h-2V6h-3V4h3V1h2zm-8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1-9.94v2.02A6.53 6.53 0 0 0 12 5c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14V11h2v.2c0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.34 0 .67.02 1 .06z"></path>
                                        </svg>
                                
                                    </div>
                            
                                    <p>
                                        <span>Address:<br></br></span>                                        
                                        8333 N.W. 53rd Street Suite 450 33166<br></br>
                                        Doral FL, United States
                                    </p>
                            
                                </div>
                            
                                <div className='each-adress-email-icon'>
                                    <div className='icon-circle'>
                                        <svg class="css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 
                                        24" data-testid="MailOutlineOutlinedIcon">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                                        </svg>
                                    </div>
                                    
                                    <p className='email-text'>
                                        <span>Email:&nbsp;<br></br></span>
                                        service@agriglobalmarket.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='socialmedia-and-policy'>
                            
                            <div className='socialmedia-icons'>
                                
                                <a href="https://www.linkedin.com/company/75717867/admin/" target="_blank" rel="noreferrer">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                                    </svg>
                                </a>
                                
                                <a href="https://www.facebook.com/agriglobalmarketnews" target="_blank" rel="noreferrer">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon">
                                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                                    </svg>
                                </a>
                                
                                <a href="https://twitter.com/AgriglobalM" target="_blank" rel="noreferrer">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                                    </svg>
                                </a>
                                
                                <a href="https://www.instagram.com/agriglobalmarket/" target="_blank" rel="noreferrer">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon">
                                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                                    </svg>
                                </a>
                                
                                <a href="https://www.youtube.com/channel/UCiJ9R4nEixnn2Kfcc3J26rg" target="_blank" rel="noreferrer">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="YouTubeIcon">
                                        <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                                    </svg>
                                </a>
                                
                            </div>
                            
                            <p className='rights-brand'>AgriGlobal Market INC ©2023 All Rights Reserved</p>
                            
                            <div className='policy'>
                                
                                <a href="#">
                                    <p className='policy-title'>Terms and Conditions</p>
                                </a>
                                
                                <a href="#">
                                    <p className='policy-title'>Privacy Policies</p>
                                </a>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className='our-services'>
                        <h3>OUR SERVICES</h3>

                        <div className='services-options'>
                            <a href="#">
                                <p>About Us</p>
                            </a>
                            
                            <a href="#">
                                <p>Sell your product on AGM</p>
                            </a>
                    
                            <a href="#">
                                <p>Help Center</p>
                            </a>
                            
                            <a target="_blank" rel="noreferrer" href="https://agriglobalnews.com/">
                                <p>AGM News</p>
                            </a>
                            
                            <button class="flex justify-start">Contact Us</button>
                            
                        </div>
                    
                    </div>
                
                </div>


            </section>
        </div>
    )
}

export default Footer;