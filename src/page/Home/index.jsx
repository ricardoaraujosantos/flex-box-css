import React from "react";
import { Button, Card, ImageCard } from "../../components";
import { Wrapper, Container, Header, Logo, Nav, NavMenu, TitleCard, DescriptionCard } from "./style";

const Home = () => {

    return(
        <Wrapper>
            <Container>
                <Header>
                    <Logo> FlexTurismos </Logo>
                    <Nav>
                        <NavMenu children= 'Quem Somos' />
                        <NavMenu children= 'Serviços' />
                        <NavMenu children= 'Planos' />
                    </Nav>
                </Header>
            </Container>
            <Container>
                <Card>
                    <TitleCard>
                        Flex Turismos
                    </TitleCard>
                    <DescriptionCard>Conheça nossos serviços</DescriptionCard>
                    <Button children= 'Saiba Mais' />
                </Card>
                <Card>
                   <ImageCard />
                </Card>
            </Container>
        </Wrapper>
    );
};

export default Home;