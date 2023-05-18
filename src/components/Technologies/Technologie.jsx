import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let techno = [
    {
        name: "React js",
        position: "web langage",
        img_url: "images/reactjs.png",
        stars: 5,
        disc: `ReactJS, or simply React, is a popular open-source JavaScript library used for building user interfaces (UIs)
         and web applications. It was developed by Facebook and released in 2013.`
    },
    {
        name: "PHP",
        position: "web langage",
        img_url: "images/php.png",
        stars: 4,
        disc: `PHP (Hypertext Preprocessor) is a widely-used open-source scripting language designed specifically for web development.
         It was created by Rasmus Lerdorf in 1994 and has since become one of the most popular languages for building dynamic web
          applications and websites.`
    },
    {
        name: "Python",
        position: "programmation",
        img_url: "images/python.jpeg",
        stars: 5,
        disc: `Python is a high-level, versatile, and interpreted programming language that was first released in 1991 by Guido van Rossum. `
    },
    {
        name: "HTML CSS JS",
        position: "web developement",
        img_url: "images/html_css_js.png",
        stars: 5,
        disc: `HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript (JS) are three fundamental technologies used 
        together to create and enhance web pages and web applications.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = techno.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))
    return (
        <Container id='client'>
            <Slide direction="left">
                <span className="green">Technologies</span>
                <h1>Les plus recentes</h1>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button
                        onClick={() => arrowRef.current.slickPrev()}
                    ><IoIosArrowBack /></button>
                    <button
                        onClick={() => arrowRef.current.slickNext()}
                    ><IoIosArrowForward /></button>
                </Buttons>
            </Testimonials>
        </Container>
    )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`