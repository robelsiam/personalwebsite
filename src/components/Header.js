import resume from '../assets/RobelSiamResume4website.pdf';


const Header = () => {
    return (
        <section className='header'>
            <div className="header__content">
                <h1>Hello, my name is Robel Siam welcome to my website</h1>

                <a href={resume} target="_blank" rel="noreferrer" className='button'>Check out my resume</a>
                <a href="mailto:robelesiam@gmail.com" target="_blank" rel="noreferrer" className='button'>Send me an email</a>
            </div>
        </section>
    );
}

export default Header;