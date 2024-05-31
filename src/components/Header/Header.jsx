import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { getUserData, logout } from "../../app/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

//----------------------------------------------------------------

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const myPassport = useSelector(getUserData);
  const token = myPassport.token;
  const userType = myPassport.decodificado.userRole

  const logMeOut = () => {
    const passport = {
      token: "",
      decodificado: "",
    };

    dispatch(logout(passport));
  };

  

  const navigateToAccount = () => {

    if (userType === "admin") {
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else if (userType === "artist") {
      setTimeout(() => {
        navigate("/artist");
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/client");
      }, 1000);
    }
  };

  return (
    <>
      <Navbar data-bs-theme="dark" className="header backgroundColor">
        <Container>
          <Navbar.Brand href="home" className="fontColor">
            <div className="fontColor" >PURO SKATE</div>
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              href="/home"
              className={location.pathname === "/home" ? "fontColorActive" : ""}
            >
              <div className="fontColor">HOME</div>
            </Nav.Link>
            {!token && ( // Renderizar si el usuario no está autenticado
              <>
                <Nav.Link
                  href="/register"
                  className={
                    location.pathname === "/register" ? "fontColorActive" : ""
                  }
                >
                  <div className="fontColor" >REGISTER</div>
                </Nav.Link>
                <Nav.Link
                  href="/login"
                  className={location.pathname === "/login" ? "fontColorActive" : ""}
                >
                  <div className="fontColor">LOGIN</div>
                </Nav.Link>
              </>
            )}
            {token && ( // Renderizar si el usuario está autenticado
              <>
              <div lassName="fontColor">
                <Nav.Link className={location.pathname === "/admin" || location.pathname === "/client" || location.pathname === "/artist" ?  "fontColorActive" : ""}  onClick={() => navigateToAccount()}><div className="fontColor">MY ACCOUNT</div></Nav.Link>

              </div>
                <Nav.Link onClick={() => logMeOut()}>LOGOUT</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
