import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  MenuItem,
  Menu,
  MenuLink,
} from "./styles/Navbar.Style";

function NavBar({ total }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">GoDutch</NavLogo>
        <MenuIcon onClick={handleClick}>
          {click ? <BiX /> : <BiMenu />}
        </MenuIcon>
        <Menu>
          <MenuItem>
            <MenuLink to="/insights">Insights</MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
