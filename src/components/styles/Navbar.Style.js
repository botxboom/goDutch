import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import { Container } from "../../GlobalStyles";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: #2f8f9d;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const NavIcon = styled(BiRestaurant)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(2);
  }
`;

export const MenuIcon = styled.div`
  display: none;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const MenuItem = styled.li`
  text-decoration: none;
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #e38b06;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
