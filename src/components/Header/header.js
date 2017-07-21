import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import classes from './Header.scss'

class Header extends React.Component {

  render () {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className={classes.navItem} href={'#'}>HOME</NavItem>
              <NavItem className={classes.navItem} href={'#'}>ABOUT</NavItem>
              <NavItem className={classes.navItem} href={'#'}>COMMUNITY</NavItem>
              <NavItem className={classes.navItem} href={'#'}>RECRUITMENT</NavItem>
              <NavItem className={classes.navItem} href={'#'}>MEMBERS</NavItem>
              <NavItem className={classes.navItem} href={'#'}>SERVICE</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
