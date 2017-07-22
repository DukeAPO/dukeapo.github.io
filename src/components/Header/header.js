import React from 'react'
import Scroll from 'react-scroll'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import classes from './Header.scss'

class Header extends React.Component {

  scrollToElement (elem) {
    Scroll.scroller.scrollTo(elem, {
      duration: 850,
      delay: 100,
      smooth: true
    })
  }

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
              <NavItem className={classes.navItem} onClick={() =>
                this.scrollToElement('homeScrollPoint')}>Home</NavItem>
              <NavItem className={classes.navItem} onClick={() =>
                this.scrollToElement('aboutScrollPoint')}>About</NavItem>
              <NavItem className={classes.navItem} onClick={() =>
                this.scrollToElement('communityScrollPoint')}>Community</NavItem>
              <NavItem className={classes.navItem} onClick={() =>
                this.scrollToElement('recruitmentScrollPoint')}>Recruitment</NavItem>
              <NavItem className={classes.navItem} onClick={() =>
                this.scrollToElement('serviceScrollPoint')}>Service</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
