import { connect } from "react-redux";
import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import AppBar from "./Layout/AppBar";
import AppFooter from "./Layout/AppFooter";
import ConcertList from "./Concerts/ConcertList";
import { getDir } from "../redux/selectors/i18n";

function App(props) {
  useEffect(() => {
    document.dir = props.dir;
  }, [props.dir]);

  return (
    <>
      <AppBar />

      <ConcertList />

      <AppFooter />
    </>
  );
}

App.propTypes = {
  dir: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ dir: getDir(state) });

export default connect(mapStateToProps)(App);
