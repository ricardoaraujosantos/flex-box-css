import React from "react";
import { Button, Card, IconCard, ImageCard } from "../../components";
import { Wrapper, Container, Header, Logo, Nav, NavMenu, TitleCard, DescriptionCard } from "./style";
import ImgQuemSomos from '../../assets/quem-somos.png';


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
                        FlexTurismos
                    </TitleCard>
                    <DescriptionCard>Conheça nossos serviços</DescriptionCard>
                    <Button children= 'Saiba Mais' />
                </Card>
                <Card>
                   <ImageCard />
                </Card>
            </Container>
            <Container>
                <Card>
                   <img src={ImgQuemSomos} alt="Foto recepeção da empresa" />
                </Card>
                <Card>
                    <TitleCard>
                        |Quem Somos
                    </TitleCard>
                    <DescriptionCard>
                        Lorem ipsum dolor sit Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit Lorem ipsum dolor sit amet
                    </DescriptionCard>
                    <DescriptionCard>
                        Lorem ipsum dolor sit Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit Lorem ipsum dolor sit amet
                    </DescriptionCard>
                </Card>
            </Container>
            <Container>
                <IconCard />
            </Container>
        </Wrapper>
    );
};

export default Home;