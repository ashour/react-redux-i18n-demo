import React from "react";
import AppBar from "./Layout/AppBar";
import AppFooter from "./Layout/AppFooter";
import ConcertList from "./Concerts/ConcertList";

function App() {
  return (
    <>
      <AppBar />

      <ConcertList />

      <AppFooter />
    </>
  );
}

export default App;
