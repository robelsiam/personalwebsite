import { Document } from 'react-pdf';
// Import Assets
import morpheus from '../assets/morpheus.gif';
import resume from '../assets/RobelSiamResume4website.pdf';


const Header = () => {
    return (
        <section className='header'>

            <div className='header__content'>
                <img src={morpheus} alt="morpheus" />
                <p>"Have you ever had a dream, Neo, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?" - The Matrix, 1999</p>
                <h1>Hello, my name is Robel Siam welcome to my website</h1>
            </div>
            <div className="header__content">
                <a href={resume} target="_blank" rel="noreferrer" className='button'>Check out my resume</a>

                <a href="mailto:robelesiam@gmail.com" target="_blank" rel="noreferrer" className='button'>Send me an email</a>
            </div>
        </section>
    );
}

export default Header;