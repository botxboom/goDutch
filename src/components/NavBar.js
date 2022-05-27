import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  MenuItem,
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

        <MenuItem>Total Expenses: {total} INR</MenuItem>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
