import '../../App.css'
import Logo from '../assets/img/koleader-logo.png'

const Home =() =>{

    return(
        <section className='Home section'>

            <div className='home__logo'>
                <img className='logo' alt='KOLEADER' src={Logo}  />
            </div>
            
            <div className='home__menu'> 
                <div className='menu__description'>M E N U</div>
                <div className='line'></div>
            </div>

            <video autoplay muted loop id='home-video'>
                <source src='' type='video/mp4'/>
            </video>


            <div className='home__content'>
                <h1 className='home__title'>
                        <span className='bounce'>B</span>
                        <span className='bounce'>O</span>
                        <span className='bounce'>O</span>
                        <span className='bounce'>K</span>
                        <span className='bounce'>I</span>
                        <span className='bounce'>N</span>
                        <span className='bounce'>G</span>
                        <span>  </span>
                        <span className='bounce'>A</span>
                        <span className='bounce'>N</span>
                        <span className='bounce'>D</span>
                     
                    <br /> 
                        <span className='bounce'>A</span>
                        <span className='bounce'>R</span>
                        <span className='bounce'>T</span>
                        <span className='bounce'>I</span>
                        <span className='bounce'>S</span>
                        <span className='bounce'>T</span>
                    <br /> 
                    
                        <span className='bounce'>M</span>
                        <span className='bounce'>A</span>
                        <span className='bounce'>N</span>
                        <span className='bounce'>A</span>
                        <span className='bounce'>G</span>
                        <span className='bounce'>M</span>
                        <span className='bounce'>E</span>
                        <span className='bounce'>N</span>
                        <span className='bounce'>T</span>

                </h1>
            </div>

            <div className='home__scroll'>
                <span className='scroll__title'> SCROLL DOWN</span>
                <div className='line'></div>
            </div>
        </section>
    )}

    export default Home