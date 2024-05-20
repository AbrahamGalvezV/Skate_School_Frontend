export const setBackgroundImage = (imageUrl) => ({
  type: "SET_BACKGROUND_IMAGE",
  payload: imageUrl,
});

const initialState = {
  backgroundImage: "",
};

const backgroundSlice = (state = initialState, action) => {
  // Reducer que se encarga de generar el cambio de background
    switch (action.type) {
    case "SET_BACKGROUND_IMAGE":
      return {
        ...state,
        backgroundImage: action.payload,
      };
      // Vuelve al estado inicial
    default:
      return state;
  }
};

export default backgroundSlice;
