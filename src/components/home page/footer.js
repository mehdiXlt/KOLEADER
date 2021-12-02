import '../../App.css'
import LOGO from '../assets/img/koleader-logo.png'


const Footer =()=>{

    return(
        <section className='footer section'>

            <div className='footer__left'>
                <img className='footer__logo' alt='' src={LOGO}/>

            
                <ul className='social'>
                    <span>Facbook</span>
                    <span>Instagram</span>
                    <span>Tweeter</span>
                </ul>
            </div>
            <div className='footer__right'>
                <ul>
                    <li>Home</li>
                    <li>influencer</li>
                    <li>artists</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer