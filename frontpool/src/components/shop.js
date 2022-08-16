import img from '../img/pool.jpg'
import React from "react";
import data from '../data';
import Modal from './modal';



export default function Shop() {
    const [openModal, setOpenModal] = React.useState(false)
    const [modalData, setModalData] = React.useState(
        {
            name : '',
            price : 0,
            quantity : 0,
            desc : '',
            image : '',
        }
    )
    function handleClick(id) {
        setModalData(id)
        setOpenModal(true)
        console.log(modalData)
    }

    function closebtn() {
        return setOpenModal(false)
    }
    const element = data.map(item => <div key={item.id} className='shop-card' onClick={() => handleClick(item)}>
        <div className='flex-img'>
            <img src={`../img/${item.image}`} />
        </div>
        <div className='card-info'>
            <h4 className='card-name'>{item.name}</h4>
            <div className='price-qty'>
                <span className='card-price'>${item.price}</span>
                <span className='card-qty'>{item.quantity} Pieces</span>
            </div>
            <hr></hr>
            <p className='card-desc'>{item.desc}</p>
        </div>
    </div>)
    return (
        <section className='shop' id='shop'>
            <Modal data={modalData} openModal={openModal} closebtn={() => closebtn()}/>
            <h3>Store</h3>
            <div className='shop-card-container'>
                {/* <Modal /> */}
                {element}
            </div>
        </section>
    )
}




