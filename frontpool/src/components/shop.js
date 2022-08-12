import img from '../img/pool.jpg'

export default function Shop() {
    return (
        <section className='shop' id='shop'>
            <h3>Store</h3>
            <div className='shop-card-container'>
                <div className='shop-card'>
                    <div className='flex-img'>
                        <img src={img} alt='shop card img' />
                    </div>
                    <div className='card-info'>
                        <h4 className='card-name'>Name</h4>
                        <div className='price-qty'>
                            <span className='card-price'>$20.00</span>
                            <span className='card-qty'>20 Pieces</span>
                        </div>
                        <hr></hr>
                        <p className='card-desc'>desc just a bunch of words to fill up space. i would have used lorem but fuck it </p>
                    </div>
                </div>
            </div>
        </section>
    )
}