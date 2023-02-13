// Import Assets
import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import rillow from '../assets/rillow.png';
import nftflag from '../assets/nftflagcollection.png';


const Projects = () => {
    return (
        <section className='projects'>
          <h2>Projects</h2>
                <div className="projects__row">
                 {cards.map((card, i) => (
                    <div className="projects__column">
                    <Card>
                        <div className="projects__card-title">{card.title}</div>

                        
                        <img src={card.image} alt="project"/>
                        
                        <div className="projects__card-body">{card.description}</div>

                        <a href={card.button1link} target="_blank" rel="noreferrer" className="button">{card.button1}</a>
                        <a href={card.button2link} target="_blank" rel="noreferrer" className="button">{card.button2}</a>

                    </Card>
                    </div>
                ))}
                </div>
        </section>
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
  
const cards = [
    {
      title: "Rillow",
      image: rillow,
      description:
        "Zillow clone dapp connected to a Hardhat test network. Rillow lists three ERC-721 tokens (when connected to a Blockchain wallet) owned by a test Hardhat wallet and in order to purchase the token the sale must go through the approval of an inspector and lender (two separate wallet accounts). ",
      button1:
        "View video demo",
      button2:
        "View code",
      button1link:
        "https://www.youtube.com/watch?v=ehow0I26DPs",
      button2link:
        "https://github.com/robelsiam/rillow"
    },
    {
      title: "Flag NFT Collection",
      image: nftflag,
      description:
        "NFT minting dapp connected to a Hardhat test network. This will generate a random three striped flag ERC-721 token accessible on Opensea.",
      button1:
        "Vist website",
      button2:
        "View code",
      button1link:
        "https://long-cloud-9869.on.fleek.co/",
      button2link:
        "https://github.com/robelsiam/nftwebsite"
    },

];

export default Projects;