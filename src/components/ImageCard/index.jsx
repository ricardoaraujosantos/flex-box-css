import React from 'react';
import styled from 'styled-components'
import Fhoto from '../../assets/main.png'

const CardImg = styled.img`
    background-size: cover;
    border: 4px solid ${(props) => props.theme.colors.text};
    :hover{
        border: 4px solid ${(props) => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    
`;

const ImageCard = ({ className }) => {
    return(
        <CardImg
            className={ className }
            src= { Fhoto }
        />
    );
};

export default ImageCard;