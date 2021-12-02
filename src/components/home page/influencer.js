import '../../App.css'


const Sub =()=>{

    return (
        <section className='sub section' id='sub'>
            <div className='sub__container'>
                <span className='sub__line'></span>
                <h3 className='sub__title'> INFLUENCER </h3>
                <span className='sub__line'></span>
            </div>

            <div className='sub__content'>
                <div className='sub__information'>
                    <input className='sub__inputs' type='text' placeholder='FIRST NAME'></input>
                    <input className='sub__inputs' type='text' placeholder='LAST NAME'></input>
                    <textarea  className='sub__description' rows='4' cols='35' placeholder='description'></textarea>
                    <button className='sub__button'>DONE</button>
                </div>
            </div>
            
        </section>
    )
}

export default Sub