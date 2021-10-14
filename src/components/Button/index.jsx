import React from "react";
import styled from "styled-components";


    const ButtonPattern = styled.button`
        width: 170px;
        height: 45px;
        background-color: ${(props) => props.theme.colors.button};
        color: ${(props) => props.theme.colors.primary};
        padding: 5px;
        font-size: 18px;
        font-weight: bolder;
        border: none;
        border-radius: 20px;
        :hover{
            background-color:${(props) => props.theme.colors.secondary};
            color: ${(props) => props.theme.colors.tertiary};
            border: ${(props) => props.theme.colors.tertiary};
            border-radius: 20px;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            width: 80%;
            font-size: 10px;
         }
       
         @media (max-width: 1024px) {
             width: 80%;
            font-size: 16px;
         }
    `;

    const Button = ({ children, className, onClick }) => {
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