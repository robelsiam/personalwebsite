// Import Assets
import morpheus from '../assets/morpheus.gif';

const Header = () => {
    return (
        <section className='header'>
            <img src={morpheus} alt="morpheus" />

            <div className='header__content'>
                <p>"Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?" - The Matrix, 1999</p>
                <h1>Hello, my name is Robel Siam welcome to my website</h1>
            </div>
            <div className="header__content">
                <a href="mailto:robelesiam@gmail.com" className='button'>Check out my resume</a>

                <a href="mailto:robelesiam@gmail.com" target="_blank" className='button'>Send me an email</a>
            </div>
        </section>
    );
}

export default Header;