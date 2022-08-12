import poster from '../img/pool1.jpg'

export default function Services() {
    return (
        <section className='services' id='services'>
            <h2>What We Do</h2>
            <div className='service-card'>
                <div className='service-text'>
                    <h1>We will clean your pool for money</h1>
                    <p>we are experts in pool cleaning tech</p>
                </div>

                <div className='service-img right'>
                    <img src={poster} alt='something' />
                </div>
            </div>
            <div className='service-card'>
                <div className='service-img'>
                    <img src={poster} alt='something' />
                </div>
                <div className='service-text right'>
                    <h1>We will clean your pool for money</h1>
                    <p>we are experts in pool cleaning tech</p>
                </div>

            </div>
        </section>
    )
}