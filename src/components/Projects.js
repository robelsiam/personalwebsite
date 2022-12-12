// Import Assets
//import Project1 from '../assets/Project1.png';
//import Project2 from '../assets/Project2.png';
//import Project3 from '../assets/Project3.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Personal Website</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Zillow Clone</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Sql Website</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;