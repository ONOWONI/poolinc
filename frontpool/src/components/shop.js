import img from '../img/pool5.jpg'

export default function Shop() {
    return (
        <section className='shop' id='shop'>
            <h3>Or shop with us</h3>
            <div className='shop-card'>
                <div>
                    <img src={img} alt='shop card img' />
                </div>
                <div>
                    <h4>Name</h4>
                    <p>price</p>
                    <span>qty</span>
                    <p>desc</p>
                </div>
            </div>
        </section>
    )
}