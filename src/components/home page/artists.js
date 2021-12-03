import '../../App.css'


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
                <div className='artists__card mounir'>
                    <span className='card__title '> MOUNIR BOUHI</span>
                </div>

                {/* Zakaria karaou */}
                <div className='artists__card zakaria'>
                    <span className='card__title '> ZAKARIA  KARAOUET</span>
                </div>
                
                {/* lyna aridji */}
                <div className='artists__card nihad'>
                    <span className='card__title '> NiHAD ANDELAZIZ</span>
                </div>

                {/* abdelwahab hamma */}
                <div className='artists__card Abdelwahab'>
                    <span className='card__title '> ABDELWAHAB HAMMA</span>
                </div>

                {/* abdnour bendjeddou*/}
                <div className='artists__card abdnour'>
                    <span className='card__title '> NiHAD ANDELAZIZ</span>
                </div>

                {/* karim semacha */}
                <div className='artists__card karim'>
                    <span className='card__title '> KARIM SEMCHA</span>
                </div>

                {/* lemkach red */}
                <div className='artists__card lemkach'>
                    <span className='card__title '> LEMKACH RED</span>
                </div>

                {/* lyna aridj */}
                <div className='artists__card lyna'>
                    <span className='card__title '> LYNA ARIDJ </span>
                </div>

                {/* maome moha oughlis */}
                <div className='artists__card maome'>
                    <span className='card__title '> MAOME MOHA OUGHLIS</span>
                </div>

                {/* mounir bouhi */}
                <div className='artists__card yousra'>
                    <span className='card__title '> YOUSRA AZEB</span>
                </div>

                {/* dastan gramm */}
                <div className='artists__card daston'>
                    <span className='card__title '> DASTAN GRAMM</span>
                </div>

                {/* yaramammo */}
                <div className='artists__card yara'>
                    <span className='card__title '> YARAMAMMO</span>
                </div>

            </div>
        </section>
    )
}

export default Artists