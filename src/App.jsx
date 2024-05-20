import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { Body } from "./pages/Body/Body";
// import BackgroundImageUploader from "./components/Edit/BackgroundImageUploader";
import { useSelector } from "react-redux";
import React, { useEffect } from 'react';

//------------------------------------------------------------------------------

function App() {
  const backgroundImage = useSelector((state) => state.background.backgroundImage);

  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
    }
  }, [backgroundImage]);
  return (
    <>
        <Header />
        <Body />
        <Footer />
    </>
  );
}

export default App;
