import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    margin-bottom: 50px;
    justify-content: space-around;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${(props) => props.theme.colors.background};
    height: 200px;
    width: 100vw;
    margin: 0;
`;

export const Logo = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.primary};
    font-size: 32px;
    margin: 0;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: flex-end
`;

export const NavMenu = ({children}) => <Menu>{children}</Menu>;

const Menu = styled.a`
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
    margin-left: 25px;
    :hover{
        color: ${(props) => props.theme.colors.secondary};
        cursor: pointer;
    }

`;

export const TitleCard = styled.h2`
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: bolder;
    font-size: 55px;
    width: 20%;
`; 

export const DescriptionCard = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 18px;
    font-weight: bold;
`;
