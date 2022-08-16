import React from "react"

export default function Modal(props) {
    return (
        <div className="overlay" >
            {props.openModal &&
            <div className="modal-container" >
               <div className='modal-img'>
                    <img src={`../img/${props.data.image}`} />
                </div>
                <div className='modal-info'>
                        <button onClick={props.closebtn} className='closebtn'> X </button>
                    <div className="modal-stats">
                        <h4 className='modal-name'>{props.data.name}</h4>
                        <div className='modal-price-qty'>
                            <span className='modal-price'>${props.data.price}</span>
                            <span className='modal-qty'>{props.data.quantity} Pieces</span>
                        </div>
                        <hr></hr>
                    </div>
                    <p className='modal-desc'>{props.data.desc}</p>
                    <div className="buy"><button>BUY</button></div>
                </div>
            </div>}
        </div>
    )
}