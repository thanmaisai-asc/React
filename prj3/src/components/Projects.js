// Projects.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import './style.css'; 

const Projects = () => { 
    const breadcrumbsPaths = 
        [ 
            { title: 'Home', to: '/' }, 
            { title: 'Projects', to: '/projects' } 
        ]; 

    return ( 
        <section id="projects"
            className="container text-center"> 
            <Breadcrumbs paths={breadcrumbsPaths} /> 
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCode} 
                    className="mr-2" /> 
                Projects 
            </h2> 
            <div className="row"> 
                {/* Project 1 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Read For Speed - 
                                Smart India Hackathon 2022 
                            </h5> 
                            <p className="card-text"> 
                                Designed the UI and implemented 
                                CSS styling for the website, 
                                optimizing performance and design across 
                                all pages. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 2 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Training and Placement 
                                Cell Website Official 
                            </h5> 
                            <p className="card-text"> 
                                Designed and developed the official 
                                Placement Website for the university using 
                                HTML, CSS, JavaScript, jQuery, and Bootstrap. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 3 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                E-commerce Platform 
                            </h5> 
                            <p className="card-text"> 
                                Built a fully functional e-commerce 
                                platform with features like product listing, 
                                cart management, and user authentication using 
                                React, Node.js, and MongoDB. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
                {/* Project 4 */} 
                <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Social Media Dashboard 
                            </h5> 
                            <p className="card-text"> 
                                Developed a social media dashboard 
                                that allows users to view and manage 
                                their social media accounts in one place, 
                                integrating with APIs from major platforms. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </section> 
    ); 
}; 

export default Projects;
