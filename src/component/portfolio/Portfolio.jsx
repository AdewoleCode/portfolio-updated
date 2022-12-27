import React from 'react'
import '../portfolio/Portfolio.css';
import PortfolioCard from './PortfolioCard';


import Projects from '../../helper/Projects';
import { useParams } from 'react-router-dom';

const Portfolio = () => {

    // let {id} = useParams()
    // const projectL = Projects[id]
    return (

        <>
            <section id='project'>
                <h5>Portfolio</h5>
                <h2>Yeah I work hard...</h2>

                <div className="container portfolio-container">

                    {Projects.map((project, index) => {
                        return (
                            <PortfolioCard key={index} index={index} image={project.imgUrl} name={project.projectName} webUrl={project.webUrl} />
                        )
                    })}


                </div>
            </section>
        </>
    )
} 

export default Portfolio