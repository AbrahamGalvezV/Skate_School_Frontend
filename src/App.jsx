import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { Body } from "./pages/Body/Body";
// import BackgroundImageUploader from "./components/Edit/BackgroundImageUploader";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserData } from "./app/slices/userSlice";
import { bringProfile } from "./services/apiCalls";

//------------------------------------------------------------------------------

function App() {
  const [modifications, setModifications] = useState({
    background: "src/assets/img/air.jpg",
    backgroundColor: "rgb(0, 0, 0)",
    fontColor: "rgb(0, 198, 165)",
    fontColorText: "rgb(246, 223, 207)",
    fontColorButton: "rgb(0, 198, 165)",
  });

  const myPassport = useSelector(getUserData);
  const token = myPassport.token;

  console.log(myPassport);

  // Obtener modificaciones
  useEffect(() => {
    const fetchModifications = async () => {
      if (token) {
        const myModifications = await bringProfile(token);
        setModifications(myModifications);
        console.log(myModifications, "modifications by id");
      }
    };
    fetchModifications();
  }, [token]);

  // Fondo por defecto
  useEffect(() => {
    if (modifications.background) {
      document.body.style.background = `#000000 url(${modifications.background}) no-repeat top center / cover `;
    }
  }, [modifications.background]);

  useEffect(() => {
    if (modifications.fontColor) {
      document.documentElement.style.setProperty(
        "--font-color",
        modifications.fontColor
      );
    }
  }, [modifications.fontColor]);

  useEffect(() => {
    if (modifications.fontColorText) {
      document.documentElement.style.setProperty(
        "--font-color-text",
        modifications.fontColorText
      );
    }
  }, [modifications.fontColorText]);

  useEffect(() => {
    if (modifications.backgroundColor) {
      document.documentElement.style.setProperty(
        "--background-color",
        modifications.backgroundColor
      );
    }
  }, [modifications.backgroundColor]);

  useEffect(() => {
    if (modifications.fontColorButton) {
      document.documentElement.style.setProperty(
        "--font-color-btn",
        modifications.fontColorButton
      );
    }
  }, [modifications.fontColorButton]);

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
