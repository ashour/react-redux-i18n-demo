import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Icon from "react-bulma-components/lib/components/icon";
import Navbar from "react-bulma-components/lib/components/navbar";
import { supportedLocales } from "../../config/i18n";
import { setLocaleWithFallback } from "../../redux/actions/i18n";

class LanguageSwitcher extends React.Component {
  handleLanguageLinkClick = (e, code) => {
    e.preventDefault();

    this.props.setLocaleWithFallback(code);
  };

  render() {
    return (
      <Navbar.Item dropdown hoverable href="#">
        <Navbar.Link>
          <Icon>
            <span className="fas fa-globe" />
          </Icon>{" "}
          <span>Language</span>
        </Navbar.Link>

        <Navbar.Dropdown>
          {Object.keys(supportedLocales).map(code => (
            <Navbar.Item
              href="#"
              key={code}
              active={code === this.props.locale}
              onClick={e => this.handleLanguageLinkClick(e, code)}
            >
              {supportedLocales[code]}
            </Navbar.Item>
          ))}
        </Navbar.Dropdown>
      </Navbar.Item>
    );
  }
}

LanguageSwitcher.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleWithFallback: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ locale: state.i18n.locale });

const mapDispatchToProps = { setLocaleWithFallback };

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
