import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5px; 
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${(props) => props.theme.colors.background};
    height: 250px;
    width: 100vw;
    margin: 0;
`;

export const Logo = styled.h1`
    
    color: ${(props) => props.theme.colors.primary};
    font-size: 50px;
    margin: 0;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: flex-end
`;

const Menu = styled.a`
    color: ${(props) => props.theme.colors.primary};
    font-size: 22px;
    font-weight: bolder;
    margin-left: 25px;
    :hover{
        color: ${(props) => props.theme.colors.secondary};
        cursor: pointer;
    }
`;

export const NavMenu = ({children}) => <Menu>{children}</Menu>;

export const TitleCard = styled.h2`
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: bolder;
    font-size: 50px;
    
`; 

export const DescriptionCard = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;
