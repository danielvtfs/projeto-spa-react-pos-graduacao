import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import logo from '../../img/guitarraX.png';
import './styles.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <a href="/">
          <img className="imgLogo" src={logo} alt="Logo" />
        </a>
        <NavbarBrand className="nameLogo" href="/">
          GuitarX
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navItem" href="/cursos">
                Cursos
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="navItem" nav caret>
                Serviços
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/luthier">Luthier</DropdownItem>
                <DropdownItem href="/caixasDeSom">Caixas de Som</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/contato">Contato</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="navItem" href="/album">
                Álbum
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
