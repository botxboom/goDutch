import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuItem,
  Menu,
  MenuLink,
} from "./styles/Navbar.Style";

function NavBar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">GoDutch</NavLogo>
        <Menu>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/create">Create</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/insights">Insights</MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
