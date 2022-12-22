// Import Assets
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

import website from '../assets/websitescreenshot.png';
import ScreenShot2 from '../assets/ScreenShot2.png';
import ScreenShot3 from '../assets/ScreenShot3.png';




const Projects = () => {
    return (
        <div>
            <div className="projects__container">
                <div className="projects__row">
                 {cards.map((card, i) => (
                    <div className="projects__column">
                    <Card>
                        <div className="projects__card-title">{card.title}</div>
                        <img src={card.image} />
                        <div className="projects__card-body">{card.description}</div>

                        <a href="mailto:robelesiam@gmail.com" rel="noreferrer" className='button'>Check out my resume</a>
                        <a href="mailto:robelesiam@gmail.com" target="_blank" rel="noreferrer" className='button'>Send me an email</a>
                    </Card>
                    </div>
                ))}
                </div>
            </div>
        </div>
      );
    
}

function Card({ children }) {
    const ref = useRef();
  
    const [isHovered, setHovered] = useState(false);
  
    const [animatedProps, setAnimatedProps] = useSpring(() => {
      return {
        xys: [0, 0, 1],
        config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
      };
    });
  
    return (
      <animated.div
        ref={ref}
        className="projects__card"
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX, clientY }) => {
          const x =
            clientX -
            (ref.current.offsetLeft -
              (window.scrollX || window.pageXOffset || document.body.scrollLeft));

          const y =
            clientY -
            (ref.current.offsetTop -
              (window.scrollY || window.pageYOffset || document.body.scrollTop));

          const dampen = 50; // Lower the number the less rotation
          const xys = [
            -(y - ref.current.clientHeight / 2) / dampen, // rotateX
            (x - ref.current.clientWidth / 2) / dampen, // rotateY
            1.07 // Scale
          ];
  
          // Update values to animate to
          setAnimatedProps({ xys: xys });
        }}
        onMouseLeave={() => {
          setHovered(false);
          // Set xys back to original
          setAnimatedProps({ xys: [0, 0, 1] });
        }}
        style={{
          // If hovered we want it to overlap other cards when it scales up
          zIndex: isHovered ? 2 : 1,
          // Interpolate function to handle css changes
          transform: animatedProps.xys.interpolate(
            (x, y, s) =>
              `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          )
        }}
      >
        {children}
      </animated.div>
    );
}

function Hero({ children }) {
    return (
      <div className="projects__hero">
        <div className="projects__hero-body">{children}</div>
      </div>
    );
}

function Image({ src }) {
    return (
            <div className="projects__ratio-inner">
              <img src={src} alt="Aave Landing Page" />
            </div>
    );
  }
  
const cards = [
    {
      title: "Personal Website",
      image: website,
      description:
        "Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week."
    },
    {
      title: "Zillow Clone",
      image: ScreenShot2,
      description:
        "Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool."
    },
    {
      title: "SQLapp",
      image: ScreenShot3,
      description:
        "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor."
    }
];

export default Projects;
