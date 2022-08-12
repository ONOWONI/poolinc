import logo from '../img/poolinctrans.png'


export default function Header() {
    return (
        <div className='header-container'>
            <img src={logo} alt='logo' className='header-logo'/>
            <div className='link-container'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#shop'>Store</a></li>
                    <li><a href='#'>Trivia</a></li>
                    <li><a href='#'>Party</a></li>
                </ul>
            </div>
            <button className='header-contact'>Contact Us</button>
        </div>
    )
}