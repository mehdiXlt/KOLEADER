import './appcss.css'
import LOGO from '../assets/img/koleader-logo.png'
import HomeImage from '../assets/img/influe.jpg'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'



const Details =()=>{

    return(
        <section className='details'>
            <div className='detail__nav'>
                
                
                <div className='right__nav'>
                    <img src={LOGO} />
                </div>
                <div className='left__nav'>
                    <ul className='nav__list'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <section className='Home section'>
            
                <div className='left__home'>
                    <div className='textimg'>
                        <span className='img__text'>#fashion</span>
                        <img className='Home__img' src={HomeImage}/>
                    </div>
                    <ul className='social__list'>
                        <li>
                            <FaTiktok/>
                        </li>
                        <li>
                            <FiFacebook />
                        </li>
                        <li>
                            <AiOutlineInstagram/>
                        </li>
                        <li>
                            /yourname
                        </li>
                    </ul>
                </div>

                <div className='right__home'>
                    <div className='home__data'>
                        <span className='home__title'>
                            Meet the Key <br /> Opinion leader
                        </span>

                        <span className='home__subtitle'>
                            lorem ipsum
                        </span>

                        <a className='home__button'>
                            BOOk NOW
                        </a>

                        <span className='home__detail'>
                            Welcome to <br />KOLeader website  
                        </span>

                        <span className='home__subtitl'>
                            Av. Lorem ipsum dolor 2045 <br />
                            Dolor sit Amet - adress
                        </span>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Details