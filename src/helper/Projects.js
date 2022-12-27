// import React from 'react'
import { TbApi } from 'react-icons/tb'
import IMG1 from '../assets/crypyo-App.png'
import IMG2 from '../assets/maltimart.png'
import IMG3 from '../assets/TravelNaija.png'




const projects = [
    {
        // id: "01",
        projectName: "Coin Search",
        imgUrl: IMG1,
        desc: "A crypto website with a easy to use, modern UI where any crypto enthusiast can go to check for crypto prices, current values, brief history, market ranks and more..",
        webUrl: 'https://coin-search-crypto.herokuapp.com/',
        gitHub: 'https://github.com/AdewoleCode/cypto-web-app',
        stacks: [
            'reactJS',
            'external crpto Api',
            'TailwindCss'
        ]
    },
    {
        // id: "02",
        projectName: "Multimart",
        imgUrl: IMG2,
        desc: "A fully functioning E-commerce store with a nice, modern, easy to navigate User interface. users can add item to cart, filter or search for a particular products, create an account, checkout....",
        webUrl: 'https://maltimartstore.netlify.app',
        gitHub: 'https://github.com/AdewoleCode/Ecommerce-project',
        stacks: [
            'reactJS',
            'redux Toolkit',
            'Firebase'
        ]

    },
    {
        // id: "03",
        projectName: "Travel Naija ",
        imgUrl: IMG3,
        desc: "A simple static website that shows my eye for great designs. a website designed for a traveling agency company, page also features light and dark mode.",
        webUrl: 'https://travelnaija.netlify.app/',
        gitHub: 'https://github.com/Robinhood1712/travelNaija',
        stacks: [
            'html',
            'css',
            'javascript'
        ]


    },
    
]



export default projects