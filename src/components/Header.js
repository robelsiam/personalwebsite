import resume from '../assets/RobelSiamResume4website.pdf';


const Header = () => {
    const paypalUrl = "https://www.paypal.com/donate/?business=6BU9VY2WMLN5E&no_recurring=0&item_name=i+need+money+to+buy+stuff+on+grailed&currency_code=USD";

    return (
        <section className='header'>
            <div className="header__content">
                <h1>Hello, my name is Robel Siam welcome to my website</h1>

                <a href={resume} target="_blank" rel="noreferrer" className='button'>Check out my resume</a>
                <a href="mailto:robelesiam@gmail.com" target="_blank" rel="noreferrer" className='button'>Send me an email</a>
                
                <form action={paypalUrl} method="post" target="_blank">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </section>
    );
}

export default Header;