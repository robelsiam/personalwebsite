import resume from '../assets/RobelSiamResume4website.pdf';


const Header = () => {
    const paypalUrl = "https://www.paypal.com/donate/?business=6BU9VY2WMLN5E&amount=5&no_recurring=0&item_name=give+me+money+for+grailed&currency_code=USD";

    return (
        <section className='header'>
            <div className="header__content">
                <h1>Hello, my name is Robel Siam welcome to my website</h1>

                <a href={resume} target="_blank" rel="noreferrer" className='button'>Check out my resume</a>
                <a href="mailto:robelesiam@gmail.com" target="_blank" rel="noreferrer" className='button'>Send me an email</a>
                <a href={paypalUrl} target="_self" rel="noreferrer" className='button'>Send me money</a>
  
            </div>
        </section>
    );
}

export default Header;