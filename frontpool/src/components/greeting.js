import img from '../img/pool.jpg';

export default function Greeting() {
    return (
        <div>
            <img src={img} className='main-img' />
            <div className='pooltext'>
                Howdy
            </div>
        </div>
    )
}