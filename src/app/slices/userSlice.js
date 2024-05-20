import { createSlice } from "@reduxjs/toolkit";

//-----------------------------------------------------

// Guarda la informaciòn del usuario
export const userSlice = createSlice({                  
    name: "user",
    initialState: {
        token: "",
        decodificado:{
            userRole: "",
            userId : "",
            userName: "",
        },
    },

    // Guarda la información del usuario al hacer login 
    reducers: {
        login: (state,action) => {
            return {                                    
                ...state,
                ...action.payload,
            }
        } ,

        // Con esta función volvemos al estado inicial de clearSlice (borramos la info del user)
        logout: (state,action) => {
            return {
                token: "",
                decodificado:{
                    userId : "",
                    userName: "",
                },
            }                                           
        },

    }
})

// Exportamos las acciones a las que accederemos a través del useDispatch para escribir en el almacén
export const { login, logout} = userSlice.actions

// Definimos y exportamos los métodos que nos permitirán venir al almacén a leer información
export const getUserData = (state) => state.user

// Método que nos dice el role si el usuario logeado 
export const amIAdmin = (state) => state.user.decodificado.userRole === "admin"
export const amIArtist = (state) => state.user.decodificado.userRole === "artist"
export const amIAuth = (state) => state.user.decodificado.userRole
export default userSlice.reducer