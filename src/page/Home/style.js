import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${(props) => props.theme.colors.background};
    height: 200px;
    width: 100vw;
`;

export const TitleHeader = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.primary};
    font-size: 32px;
    margin: 0;
`;

const Menu = styled.a`
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
    :hover{
        color: ${(props) => props.theme.colors.secondary};
        cursor: pointer;
    }

`;

export const NavMenu = ({children}) => <Menu>{children}</Menu>;
