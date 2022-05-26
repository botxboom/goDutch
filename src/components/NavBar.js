import React, { useEffect, useState } from "react";
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
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

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
