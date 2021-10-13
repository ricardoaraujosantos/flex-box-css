import React from "react";
import styled from "styled-components";

const MainCard = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const Card = ({ children }) => {
    return(
        <MainCard>{children}</MainCard>
    );
};

export default Card;