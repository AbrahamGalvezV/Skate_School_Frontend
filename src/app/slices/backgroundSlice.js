import { createSlice } from "@reduxjs/toolkit";

//----------------------------------------------------------------

const initialState = {
  backgroundImage: "",
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
  },
});

// Exportamos las acciones a las que accederemos a través del useDispatch para escribir en el almacén
export const { setBackgroundImage } = backgroundSlice.actions;

// Definimos y exportamos los métodos que nos permitirán venir al almacén a leer información
export const getBackgroundImage = (state) => state.background.backgroundImage;

export default backgroundSlice.reducer;