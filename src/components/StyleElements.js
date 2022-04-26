
import {NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #165e08;
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: x-large;
  padding: 40px;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #f79d00;
  }
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
    display: none;
}
`

export const Card = styled.div`
  width: 350px;
  height: 425px;
  background-color: #f78e31;
  margin: 10px;
  padding: 10px;
  object-fit: contain;
`;

export const IMG = styled.img`
  height: 250px;
  width: 250px;
  padding: 10px;
  margin: 0px auto;
  display: block;
  padding: 4% 7% 4% 7%;

  justify-content: center;
`;

export const Search = styled.div`
  padding: 2% 25% 2%;
  background-color: #f7d474;
  
`

export const H3 = styled.div`
  color: white;
  text-align: center;
  font-family: ${props => props.theme.font.primary};
  font-size: 1.5em;
  padding: 5px;
`

export const HomeStyle = styled.div`
background-color: #f7d474;
text-align: center;
padding: 10px;
height: 100vh;
`;

export const AnimalTiles = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 20px;
`;

