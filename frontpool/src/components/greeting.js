import img from '../img/pool.jpg';

export default function Greeting() {
    return (
        <div>
            <img src={img} className='main-img' />
            <div className='pooltext'>
                <div className='pooltext-card'>
                    <p>Poolinc is the greatest pool cleaning service you'll ever find</p>
                    <cite>~The Manager~</cite>
                </div>
                <div className='pooltext-card'>
                    <p>At poolinc we'll make your pool look brand new</p>
                    <cite>~Trust me Bro~</cite>
                </div>
            </div>
        </div>
    )
}