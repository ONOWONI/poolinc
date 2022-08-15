import img from '../img/pool.jpg'
import React from "react";




class Shop extends React.Component{
    constructor() {
        super();
        this.state={
            data : []
        }
    }

    fetchData() {
        fetch("http://localhosthttp:8000/api/products/").then(res => res.json()).then((data) => {
            this.setState({data:data})
            console.log(data)
        })
    }

    componentDidMount() {
        this.fetchData();
    }
    render() {
        const empData = this.state.data;
        const rows = empData.map(pre => <div key={pre.id}>{pre.name}</div>)
        return (
            <section className='shop' id='shop'>
                <h3>Store</h3>
                {rows}
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
                            <p className='card-desc'>desc just a bunch of words to fill up space. i would have used lorem but fuck it. and i just want to write till i find out the true meaning of life or the meaning of love or even why we all need to be alive and not dead </p>
                        </div>
                    </div>
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
}



export default Shop