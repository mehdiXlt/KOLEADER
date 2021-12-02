import '../../App.css'
import MounirBouhi from '../assets/img/mounir_bouhi.png'
import Zakaria from '../assets/img/zakaria_karaouet.png'
import Nihad from '../assets/img/nihad_andelaziz.png'


const Artists = ()=>{
    

    return(
        <section className='artists section ' id='artists'>
            <div className='artists__container'>
                <span className='artists__line'></span>
                <h3 className='artists__title'> A R T I S T S</h3>
                <span className='artists__line'></span>
            </div>
            <div className='artists__content'>
                {/* artists card */}

                
                {/* Mounir bouhi */}
                <div className='artists__card'>
                    <img className='card__img' alt='' src={MounirBouhi} />
                    <span className='card__title left-text'> MOUNIR BOUHI</span>
                </div>

                {/* Zakaria karaou */}
                <div className='artists__card'>
                    <img className='card__imgLeft' alt='' src={Zakaria} />
                    <span className='card__titleLeft zakaria'> ZAKARIA  KARAOUET</span>
                </div>
                
                {/* lyna aridji */}
                <div className='artists__card nihad'>
                    <img className='card__img ' alt='' src={Nihad} />
                    <span className='card__title Nihad'> NiHAD ANDELAZIZ</span>
                </div>
            </div>
        </section>
    )
}

export default Artists