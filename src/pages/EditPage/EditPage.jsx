import { useDispatch } from "react-redux";
import "./EditPage.css";
import { setBackgroundImage } from "../../app/slices/backgroundSlice";
import { useState } from "react";

//----------------------------------------------------------------

export const EditPage = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  // Función que permite seleccionar una nueva imagen
  const handleImageChange = (event) => {
     // Obtiene el archivo seleccionado de files
    const file = event.target.files[0];
    // Lee el contenido del archivo
    const reader = new FileReader();

    // Define una función que se ejecuta cuando FileReader termina de leer el archivo.
    reader.onloadend = () => {
      // Actualiza el estado local de la imagen con el contenido leído.
      setImage(reader.result);
      // Despacha una acción para actualizar la imagen de fondo en el estado global de Redux.
      dispatch(setBackgroundImage(reader.result));
    };

    // Si hay un archivo seleccionado, inicia la lectura del archivo como una URL de datos (data URL).
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="services section">
        <div className="container">
          <h2 className="title">🛠️ Edit 🛠️</h2>
          <p className="text services__text">Select background</p>
          <div className="custom-file-input">
          <input type="file" id="file" onChange={handleImageChange} />
          <label htmlFor="file">Choose a file</label>
        </div>
        </div>
      </div>
    </>
  );
};
