import './appcss.css'

const Detail =()=>{

    return(
        <section className='detail'>
            <div className='detail__container'>
                <span className='detail__title'> DETAILS DU SCORE</span>
                <div className='card__content'>
                        <div className='detail__left'>
                        <span className='detail__subtitle'> Indicateur Cles</span>
                        <div className='detail__card'> 
                        {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>Taux d'engagement</span>
                                <span className='card__number'>4.90%</span>
                                <span className='carte__notation'>Exellent</span>
                            </div>

                            {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>Croissance du compte</span>
                                <span className='card__number'>+15.00%</span>
                                <span className='carte__notation'>Exellent</span>
                            </div>
                            {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>Taux de saturation</span>
                                <span className='card__number'>0%</span>
                                <span className='carte__notation'>Exellent</span>
                            </div>
                            {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>Qualite d'audiance</span>
                                <span className='card__number'>N/A</span>
                                <span className='carte__notation'>Exellent</span>
                            </div>
                        </div>
                        </div>


                        <div className='detail__right'> 
                        <span className='detail__subtitle'> Indicateur supplementaires</span>
                        <div className='detail__card'> 
                        {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>Qualite des Hashtags</span>
                                <span className='card__number'>A+</span>
                                <span className='carte__notation'>Exellent</span>
                            </div>

                            {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>Activite du compte</span>
                                <span className='card__number'>3</span>
                                <span className='carte__notation'>Moyen</span>
                            </div>
                            {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>Following Radio</span>
                                <span className='card__number'>659:1</span>
                                <span className='carte__notation'>Exellent</span>
                            </div>
                            {/* carte */}
                            <div className='carte'>
                                <span className='carte__title'>divercite du compte</span>
                                <span className='card__number'>3/4</span>
                                <span className='carte__notation'>Tres bon</span>
                            </div>
                        </div>
                        </div>
                </div>        
            </div>
        </section>
    )
}

export default Detail