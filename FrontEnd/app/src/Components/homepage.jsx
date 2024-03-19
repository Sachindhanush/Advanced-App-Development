import React from 'react';
import "./homepage.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Homepage() {
   

    return (
        <>
            <Navbar />
            <div className="menu-btn" >
                <i className="fas fa-bars fa-2x" />
            </div>
          
            <div className="container">
               
                <nav className="main-nav">
                    <ul className="main-menu">
                    </ul>
                    <ul className="right-menu">
                        <li>
                            <a href="#">
                                <i className="fas fa-search" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-shopping-cart" />
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Showcase */}
                <header className="showcase">
                    <h2>Gifts Galore!</h2>
                    <p>Find the perfect gift for your loved ones.</p>
                    <Link to="/pro">     <a href="#" className="btn">
                        Explore Now <i className="fas fa-chevron-right" />
                    </a></Link>
                </header>
               
                <section className="home-cards">
                    <div>
                    <Link to="/hand">   <img src="https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Link>
                        <h3>Hand Bags</h3>
                        <p>Our handbags are crafted from the finest quality materials.</p>
                        <a href="#">
                            Shop Now <i className="fas fa-chevron-right" />
                        </a>
                    </div>
                    <div>
                    <Link to="/watch">      <img src="https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Link>
                        <h3>Engraved Watch</h3>
                        <p>Make time memorable with an engraved timepiece.</p>
                        <a href="#">
                            Shop Now <i className="fas fa-chevron-right" />
                        </a>
                    </div>
                    <div>
                    <Link to="/pro">    <img src="https://media.istockphoto.com/id/182171805/photo/a-red-and-white-gift-card-with-a-bow-on-it.jpg?b=1&s=612x612&w=0&k=20&c=A2ZppU26aAp6tO_KBz-V5eWUMesXms8KXCMwf7G45rk=" alt="" /></Link>
                        <h3>Gift Voucher</h3>
                        <p>Let them choose their perfect gift with a voucher.</p>
                        <a href="#">
                            Buy Now <i className="fas fa-chevron-right" />
                        </a>
                    </div>
                    <div>
                    <Link to="/pro">        <img src="https://images.pexels.com/photos/3927225/pexels-photo-3927225.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Link>
                        <h3>Surprise Box</h3>
                        <p>Unbox joy with our curated surprise boxes.</p>
                        <a href="#">
                            Discover Now <i className="fas fa-chevron-right" />
                        </a>
                    </div>
                </section>
                <div className='split'>
                    <div className='splitter'>
                        <header className="showcase1">
                        </header>
                        <div className='text1'>
                            <h2>Avenue 9</h2>
                            <p>Bold and beautiful primary colors define Meadow. The newest collection from Avenue 9. A gifting line that celebrates Spring.</p>
                            <Link to="/pro">       <a href="#" className="btn">
                                SHOP NOW<i className="fas fa-chevron-right" />
                            </a></Link>
                        </div>
                    </div>
                    <div className='fill'>
                        <div className="showcase2">
                        </div>
                    </div>
                    <div className='text2'>
                        <h2>Bath & Body!</h2>
                        <p>Welcome to our bath and body collection, where quality meets indulgence and wellness intertwines with style. Elevate your self-care routine with our meticulously curated selection of products designed to nourish both body and soul. Because when you prioritize self-care, you're not just taking care of your body - you're nourishing your spirit and enriching your life.</p>
                        <Link to="/pro">     <a href="#" className="btn">
                            SHOP BATH AND BODY <i className="fas fa-chevron-right" />
                        </a></Link>
                    </div>
                </div>
                <section className="follow">
                    {/* <video width={"60%"} className="video" src="https://web.giftcraft.net/icontact/umbraco/socialvideo_1920x680.mp4" autoPlay muted loop /> */}
                    <p>Follow us for more gift ideas!</p>
                    <a href="https://facebook.com">
                        <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com">
                        <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
                    </a>
                    <a href="https://linkedin.com">
                        <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
                    </a>
                </section>
            </div>
            
            <section className="links">
                <div className="links-inner">

                </div>
            </section>
            
            <section className="links">
                <div className="links-inner">
                    <ul>
                        <li>
                            <h3>Shop by Recipient</h3>
                        </li>
                        <li>
                            <a href="#">Gifts for Him</a>
                        </li>
                        <li>
                            <a href="#">Gifts for Her</a>
                        </li>
                        <li>
                            <a href="#">Gifts for Kids</a>
                        </li>
                        <li>
                            <a href="#">Gifts for Pets</a>
                        </li>
                        <li>
                            <a href="#">Gifts for Everyone</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Popular Categories</h3>
                        </li>
                        <li>
                            <a href="#">Electronics</a>
                        </li>
                        <li>
                            <a href="#">Fashion</a>
                        </li>
                        <li>
                            <a href="#">Home & Decor</a>
                        </li>
                        <li>
                            <a href="#">Books & Stationery</a>
                        </li>
                        <li>
                            <a href="#">Health & Fitness</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>Gift Inspiration</h3>
                        </li>
                        <li>
                            <a href="#">Gift Guides</a>
                        </li>
                        <li>
                            <a href="#">Best Sellers</a>
                        </li>
                        <li>
                            <a href="#">New Arrivals</a>
                        </li>
                        <li>
                            <a href="#">Gift Ideas Blog</a>
                        </li>
                        <li>
                            <a href="#">Customer Favorites</a>
                        </li>
                    </ul>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-inner">
                    <div>
                        <i className="fas fa-globe fa-2x" /> English (United States)
                    </div>
                    <ul>
                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Privacy &amp; Cookies</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        <li>
                            <a href="#">© 2024 GiftShop Inc.</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
