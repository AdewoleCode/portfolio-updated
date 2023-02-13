import React from 'react'
import ArticleItem from './ArticleItem'
import { ArticlesData } from '../../helper/Projects'
import "./ArticleItem.css"

const Articles = () => {
    return (
        <div>
            <section id='articles'>
                <h5>articles</h5>
                <h2>Some of my Featured Articles</h2>
                <div className='articles'>
                    {
                        ArticlesData.map((item, index)=> {
                            return (
                                <ArticleItem 
                                key={item.index}
                                 img={item.img}
                                 name={item.name} 
                                 url={item.Url}/>

                            )
                        })
                    }
                </div>

            </section>

        </div>
    )
}

export default Articles