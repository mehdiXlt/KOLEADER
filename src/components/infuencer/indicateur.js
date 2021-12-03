import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import './appcss.css'

const Indicateur=()=>{

    return(

        <section className='indicateur section'>
            <h2 className='indicateur__title'>INDICATEURS</h2>
            <div className='indicateur__container'>
                <div className='indicateur__social'>
                    <a>
                        <FaTiktok />
                    </a>
                    <a>
                        <FaInstagram />
                    </a>
                </div>

                <div className='indicateur__data'>
                    <div className='state'>
                        <span className='Likes'> 7,6K <br /> Likes moyens</span>
                        <span className='Abonne'>101,5K <br />Abonnes</span>
                        <span className='Publication'>154 <br />Publication</span>
                    </div>
                    
                    <div className='state__bottom'>
                        <span className='Commentes'>526 <br />Commentaires moyens</span>
                        <span className='Vue'>60,4K <br /><p>Nombrers de vue moyens/video</p></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Indicateur