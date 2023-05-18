import React, { useState } from 'react'
import styled from 'styled-components';
import ImageCard from '../ImageCard';
import { Lightbox } from 'react-modal-image';


const Card = (props) => {
    const { Icon, disc, title, link, annee } = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <Container>
            <span className='green'><Icon /></span>
            <h1>{title}</h1>
            <h3>{annee}</h3>
            <p>{disc}</p>
            <button className='btn btn-primary' onClick={e => {
                setIsOpen(true)
            }
            }>voir</button>
            
        </Container>
        {isOpen && <Lightbox
            medium={link}
            onClose={e => {
                setIsOpen(false)
            }}
        />}
        </>
    )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`