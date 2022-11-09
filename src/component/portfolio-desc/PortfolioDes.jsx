import React from 'react'
import '../portfolio-desc/PortfolioDes.css'
import Img1 from '../../assets/portfolio1.jpg';
import { TbArrowBackUp } from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom';
import  projects  from '../../helper/Projects';

const PortfolioDes = () => {

    const { id } = useParams();
    const projectList = projects[id]


    return (

        <section id='des'>
            <div className="container des-container">
                <div className="proj-image">
                    <div className="portfolio-image">
                        <img src={projectList.imgUrl} alt="" />
                    </div>

                    <div className="des-cta">
                        <a href={projectList.gitHub} className='btn' target="_blank">Github</a>
                        <a href={projectList.webUrl} className='btn btn-primary' target="_blank">Live URL</a>
                    </div>
                </div>
                <div className="proj-stacks">

                    <h2>{projectList.projectName} <div>{projectList.id}</div>   </h2>

                    <p>{projectList.desc}</p>
                    <div className="stacks">
                        <h3>Technologies Used</h3>
                        <ol>
                            <li><span>01.</span> {projectList.stacks[0]}</li>
                            <li><span>02.</span>{projectList.stacks[1]}</li>
                            <li><span>03.</span>{projectList.stacks[2]}</li>
                            {/* <li><span>04.</span> {projectList.stacks[3]}</li> */}
                        </ol>
                    </div>

                </div>
            </div>
            <Link to="/project" className='btn des-btn'>{<TbArrowBackUp />}</Link>

        </section>

    )
}

export default PortfolioDes