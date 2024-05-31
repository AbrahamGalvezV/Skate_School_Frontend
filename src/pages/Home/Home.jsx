import "./Home.css";
import teacher_1 from "../../assets/img/teacher.jpg";
import skate from "../../assets/img/skateAbance.jpg";
import SurfGroupMin from "../../assets/img/SurfGroupMin.jpg";
import surfAbance from "../../assets/img/surfAbance.jpg";
import surfSkate from "../../assets/img/surfSkate.jpg";
import surfAbancePro from "../../assets/img/surfSkatePro .jpg";

export const Home = () => {
  return (
    <>
      <div className="main section">
        <div className="container">
          <h1 className="main-title title fontColor">CLUB PURO SKATE</h1>
          <p className="main-text text fontColorText">
            Discover the sports you can learn in a pure club safely and with the
            best teachers
          </p>

          <h2 className="title fontColor">SERVICES</h2>
          <p className="text services-text-names fontColor">SKATE</p>
          <p className="text services__text fontColorText">
            Learn skateboarding from scratch <br />
            or improve your skills
          </p>
          <div className="img">
            <a className="image-link" href="/fred">
              <img src={teacher_1} alt="Image skate" />
              <p className="artist-name text fontColor">Beginer</p>
            </a>
            <a className="image-link" href="/fred">
              <img src={skate} alt="Image skate" />
              <p className="artist-name text fontColor">Advance</p>
            </a>
            <p className="text services-text-names fontColor">SURF</p>
            <p className="text services__text fontColorText">
              Learn to surf safely or improve your skills
            </p>
          </div>
          <div className="img">
            <a className="image-link" href="/fred">
              <img src={SurfGroupMin} alt="Image surf" />
              <p className="artist-name text fontColor">Beginer</p>
            </a>
            <a className="image-link" href="/fred">
              <img src={surfAbance} alt="Image skate" />
              <p className="artist-name text fontColor">Advance</p>
            </a>
            <p className="text services-text-names fontColor">SURFSKATE</p>
            <p className="text services__text fontColorText">
              Learn to handle your surfskate to progress in surfing safely and
              with professionals who will guide you
            </p>
          </div>
          <div className="img">
            <a className="image-link" href="/fred">
              <img src={surfSkate} alt="Image surf" />
              <p className="artist-name text fontColor">Beginer</p>
            </a>
            <a className="image-link" href="/fred">
              <img src={surfAbancePro} alt="Image skate" />
              <p className="artist-name text fontColor">Advance</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
