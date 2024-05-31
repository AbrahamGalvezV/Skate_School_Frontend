import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { ButtonC } from "../../components/ButtonC/ButtonC";
import { decodeToken } from "react-jwt";
import {
  bringAllServices,
  registerNewAppointment,
} from "../../services/apiCalls";
import "./AppointmentRegistre.css";
import { inputValidator } from "../../utils/validators";
import { getUserData, login } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

//------------------------------------------------------------------------------

export const AppointmentRegistreClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Hook para obtener datos del usuario desde el estado de Redux
  const myPassport = useSelector(getUserData);
  console.log(myPassport);
  const token = myPassport.token;
  const clientId = myPassport.decodificado.userId;

  // Hook para manejar el estado de las credenciales de la cita
  const [credentials, setCredentials] = useState({
    appointmentDate: "",
    clientId: clientId,
    serviceId: "",
    artistId: "",
  });

  // Almacena los servicios disponibles
  const [services, setServices] = useState([]);
  // Valida el contenido de los campos del formulario
  const [isValidContent, setIsvalidContent] = useState({
    appointmentDate: "",
    clientId: "",
    serviceId: "",
    artistId: "",
  });

  // Maneja los errores de registro
  const [registerError, setRegisterError] = useState("");
  const [msg, setMsg] = useState("");

  // Trae datos de los servicios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesData = await bringAllServices();
        console.log(servicesData);
        setServices(servicesData.data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  // Maneja los cambios en los campos del formulario
  const inputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Valida la entrada del formulario y actualiza el estado de validación
  const inputValidatorHandler = (e) => {
    const errorMessage = inputValidator(e.target.value, e.target.name);
    setIsvalidContent((prevState) => ({
      ...prevState,
      [e.target.name]: errorMessage,
    }));
    console.log(
      "is " + e.target.value + " this a valid " + e.target.name + "?"
    );
  };

  // Registra una nueva cita con las credenciales proporcionadas
  const registerAppointment = async () => {
    try {
      //desencadenara el register
      const answer = await registerNewAppointment(credentials, token);
      console.log(answer, "soy answer");

      setMsg(`appointment has been created`);

      setTimeout(() => {
        navigate("/appointments-info-client");
      }, 3000);
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") {
        setRegisterError("El servidor no responde, acceda en otro momento");
      } else {
        setRegisterError(error.response.data.message);
      }
    }
  };

  return (
    <div className="app-register section">
      <div className="container">
        {msg === "" ? <></> : <div className="title">{msg}</div>}
        {/* <pre>{JSON.stringify(credentials, null, 2)}</pre> */}
        <>
          <p className="app-register__text fontColorText">Example: 2024-05-29 18:00:00</p>
          <CustomInput
            typeProp={"text"}
            nameProp={"appointmentDate"}
            handlerProp={(e) => inputHandler(e)}
            placeholderProp={"Appointment Date"}
            isValidContent={isValidContent.appointmentDate}
            onBlurHandler={(e) => inputValidatorHandler(e)}
            errorText={isValidContent.appointmentDate}
          />
          <p className="app-register__text fontColorText">Client id</p>
          <CustomInput
            isValidContent={isValidContent.clientId}
            typeProp={"text"}
            nameProp={"clientId"}
            value={clientId}
            handlerProp={(e) => inputHandler(e)}
            placeholderProp={"Client Id"}
            onBlurHandler={(e) => inputValidatorHandler(e)}
            errorText={isValidContent.clientId}
          />
          <label htmlFor="serviceId fontColorText">Select service</label>
          <div className="form-group">
            <select
              name="serviceId"
              value={credentials.serviceId}
              onChange={inputHandler}
              onBlur={inputValidatorHandler}
            >
              <option value="" disabled> <p className="fontColorText">Select service</p> </option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  <p>{service.serviceName} - {service.description}</p>
                </option>
              ))}
            </select>
            {isValidContent.serviceId && (
              <div className="error">{isValidContent.serviceId}</div>
            )}
          </div>
          <p className="app-register__text fontColorText">Teacher</p>
          <CustomInput
            isValidContent={isValidContent.artistId}
            typeProp={"text"}
            nameProp={"artistId"}
            handlerProp={(e) => inputHandler(e)}
            placeholderProp={"Artist Id"}
            onBlurHandler={(e) => inputValidatorHandler(e)}
            errorText={isValidContent.artistId}
          />

          <ButtonC
            title={"Register!"}
            className={"regularButtonClass"}
            functionEmit={registerAppointment}
          />
        </>
        <h3>{registerError}</h3>
      </div>
    </div>
  );
};
