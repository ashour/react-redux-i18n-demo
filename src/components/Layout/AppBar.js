import React from "react";
import { Translate } from "react-redux-i18n";
import Icon from "react-bulma-components/lib/components/icon";
import Navbar from "react-bulma-components/lib/components/navbar";
import "./AppBar.sass";
import LanguageSwitcher from "../UI/LanguageSwitcher";

class AppBar extends React.Component {
  state = {
    isActive: false,
  };

  toggleIsActive = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  renderBrand({ onHamburgerClicked } = { onHamburgerClicked: () => {} }) {
    return (
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <Icon size="medium">
            <span className="fas fa-podcast fa-lg" />
          </Icon>{" "}
          <span className="AppBar__Name">
            <Translate value="app.title" />
          </span>
        </Navbar.Item>

        <Navbar.Burger onClick={onHamburgerClicked} />
      </Navbar.Brand>
    );
  }

  render() {
    return (
      <Navbar active={this.state.isActive} color="primary" className="AppBar">
        {this.renderBrand({ onHamburgerClicked: this.toggleIsActive })}

        <Navbar.Menu>
          <Navbar.Container position="end">
            <LanguageSwitcher />
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default AppBar;
