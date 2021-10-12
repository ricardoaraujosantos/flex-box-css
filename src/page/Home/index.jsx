import React from "react";
import { Wrapper, Header, TitleHeader, NavMenu } from "./style";

const Home = () => {

    return(
        <Wrapper>
            <Header>
                <TitleHeader> FlexTurismo </TitleHeader>
                    <NavMenu children= 'Quem Somos' />
                    <NavMenu children= 'Planos' />
                    <NavMenu children= 'Pacotes' />
            </Header>
        </Wrapper>
    );
};

export default Home;