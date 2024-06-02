import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserData } from "../../app/slices/userSlice";
import { updateModificationsById } from "../../services/apiCalls";
import { ButtonC } from "../../components/ButtonC/ButtonC";
import "./EditPage.css";

//----------------------------------------------------------------

export const EditPage = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedBackgroundColor, setBackgroundColor] = useState("");
  const [selectedFontColor, setFontColor] = useState("");
  const [selectedFontColorButton, setFontColorButton] = useState("");

  // Se pueden eliminar o incluir imágenes aquí
  const images = [
    { background: "src/assets/img/air.jpg" },
    { background: "src/assets/img/sunset.jpg" },
    { background: "src/assets/img/surfDrone.jpg" },
    { background: "src/assets/img/SurfGroup.jpg" },
    { background: "src/assets/img/degradado1.jpg" },
    { background: "src/assets/img/degradado2.jpg" },
  ];

    // Se pueden eliminar o incluir colores aquí
  const colorOptions = [
    "rgb(0, 0, 0)",
    "rgb(149, 0, 255)",
    "rgb(19, 101, 255)",
    "rgb(0, 231, 219)",
    "rgb(255, 185, 7)",
  ];

  const backgroundColorOptions = [
    "rgb(0, 0, 0)",
    "rgb(255, 185, 7)",
    "rgb(100, 100, 100)",
    "rgb(149, 0, 255)",
  ];

  const myPassport = useSelector(getUserData);
  const token = myPassport.token;
  const id = 1;

  // Función para manejar la selección de una imagen
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleColorSelect = (setColor, setColor1) => (event) => {
    const color = event.target.value;

    if (setColor1) {
      setColor1(color);
    }
    setColor(color);
  };

  const handleSaveBackground = async () => {
    if (!selectedImage) {
      console.error("No image selected");
      return;
    }
    await updateModificationsById(id, selectedImage, token);
    window.location.reload();
  };

  const handleSaveFontColor = async () => {
    const modifications = {
      fontColor: selectedFontColor,
      fontColorButton: selectedFontColorButton,
    };
    await updateModificationsById(id, modifications, token);
    window.location.reload();
  };
  
  const handleSaveBackgroundColor = async () => {
    if (!selectedBackgroundColor) {
      console.error("No color selected");
      return;
    }
    const modifications = {

      backgroundColor: selectedBackgroundColor,
    };
    await updateModificationsById(id, modifications, token);
    window.location.reload();
  };

  return (
    <>
      <div className="services section">
        <div className="container">
          <h2 className="title fontColor">🛠️ Edit 🛠️</h2>
          <div className="custom-file-input">
            <div className="image-selector">
              <p className="text editText fontColor">Select background</p>
              <div className="image-grid">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={`${img.background}`}
                    alt={`Background ${index}`}
                    className={`thumbnail ${
                      selectedImage === img ? "selected" : ""
                    }`}
                    onClick={() => handleImageSelect(img)}
                  />
                ))}
              </div>
              <div>
                <>
                  <ButtonC
                    title={"Save Background"}
                    className={"regularButtonClass  editButton"}
                    functionEmit={handleSaveBackground}
                  />
                </>
              </div>
            </div>
            <div className="color-selectors">
              <p className="text editText fontColor">
                Select Font Color <br /> & Color Button
              </p>
              {colorOptions.map((color, index) => (
                <label key={index} className="color-radio">
                  <input
                    type="radio"
                    name="fontColor"
                    value={color}
                    onChange={handleColorSelect(
                      setFontColor,
                      setFontColorButton
                    )}
                    style={{ display: "none" }}
                  />
                  <span
                    className="color-preview"
                    style={{ backgroundColor: color }}
                  ></span>
                </label>
              ))}
              <>
                <ButtonC
                  title={"Save Color"}
                  className={"regularButtonClass  editButton"}
                  functionEmit={handleSaveFontColor}
                />
              </>
            </div>
            <div className="color-selectors">
              <p className="text editText fontColor">Select Header <br /> & Footer Color</p>
              {backgroundColorOptions.map((color, index) => (
                <label key={index} className="color-radio">
                  <input
                    type="radio"
                    name="backgroundColor"
                    value={color}
                    onChange={handleColorSelect(setBackgroundColor)}
                    style={{ display: "none" }}
                  />
                  <span
                    className="color-preview"
                    style={{ backgroundColor: color }}
                  ></span>
                </label>
              ))}
              <>
                <ButtonC
                  title={"Save Background Color"}
                  className={"regularButtonClass  editButton"}
                  functionEmit={handleSaveBackgroundColor}
                />
              </>
            </div>
              <div className="color-selectors">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
