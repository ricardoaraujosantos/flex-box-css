import React from 'react';
import styled from 'styled-components';
import icon1 from '../../assets/icon-1.png';
import icon2 from '../../assets/icon-2.png';
import icon3 from '../../assets/icon-3.png';
import Button from '../Button';

const Card = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    height:300px;
    background: ${(props) => props.theme.colors.tertiary};
    border: 4px solid ${(props) => props.theme.colors.primary};
    border-radius: 10px;
`;

const Img = styled.img`
    width: 130px;
    height: 130px;
    margin-bottom: 20px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.text};
    font-size: 26px;
    font-weight: bolder;
`;


const IconCard = () => {

    return(
        <Card>
            <Column>
                <Img src={icon1} alt="Foto icone avião voando" />
                <Title>Pacotes de Viagens</Title>
                <Button children="Comprar Agora" />
            </Column>
           <Column>
                <Img src={icon2} alt="Foto icone hotel" />
                <Title>Hospedagens</Title>
                <Button children="Comprar Agora" />
           </Column>
           <Column>
                <Img src={icon3} alt="Foto icone gps" />
                <Title>Guia Turistico</Title>
                <Button children="Comprar Agora" />
           </Column>
        </Card>
    );
};

export default IconCard;