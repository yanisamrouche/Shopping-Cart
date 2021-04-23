import logo from '../assets/logo.jpg'
import '../styles/Banner.css'
function Banner() {
    const title = "Shopping Cart"
    return (
        <div className='lmj-banner'>
            <img src={logo} alt="" className='lmj-logo'/>
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )


}

export default Banner;