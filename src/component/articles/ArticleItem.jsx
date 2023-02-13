import React from 'react'
import "./ArticleItem.css"
import { AiFillEye } from "react-icons/ai"
import { Link } from 'react-router-dom'

const ArticleItem = ({ img, name, url }) => {
    return (
        <div className='article-item'>
            <div className="img-box">
                <img src={img} alt="" />
            </div>
            <div className="art-title">
                {name}
            </div>
            <Link to={url}>
                <div className="text">
                    <h5>Read full article</h5>
                    <AiFillEye className='text-icon' />
                </div>
            </Link>
        </div>
    )
}

export default ArticleItem