import React from "react";
import styled from "styled-components";


    const ButtonPattern = styled.button`
        width: 170px;
        height: 45px;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.primary};
        padding: 5px;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        :hover{
            background-color:${(props) => props.theme.colors.tertiary};
            cursor: pointer;
        }
    `;

    const Button = ({ children, className, onClick}) => {
        return(
            <ButtonPattern
            className={className}
            onClick={onClick}
        >
            {children}
    </ButtonPattern>
        );
    };

export default Button;