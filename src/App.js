import "./App.css";
import "./styles.scss";
import Header from "./components/Header";
import BannerCarousel from "./components/BannerCarousel";
import SectionContainer from "./components/SectionContainer";
import Footer from "./components/Footer";
import Galery from "./components/Galery";
// import Toilet from "../public/images/toilet.jpg";
// import ContactUs from "../images/contact-us.svg";

function App() {
  return (
    <div>
      <Header />
      <BannerCarousel />
      <div className="container my-4">
        <div className="row align-items-center py-5">
          <div className="col-md-7 ">
            <h2 className="">
              Oh yeah, it's that good.
              <br />
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 ">
            <img
              className="contact-us"
              src="/images/room.jpg"
              alt="contact-us"
              style={{ width: "100%", height: 400, objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="row align-items-center py-5 px-2">
          <div className="col-md-5">
            <img
              className="contact-us"
              src="/images/toilet.jpg"
              alt="contact-us"
              style={{ width: "100%", height: 400, objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7 ">
            <h2 className="">
              Oh yeah, it's that good.
              <br />
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
        </div>
      </div>
      <SectionContainer />
      <div className="container mt-5 mb-5">
        <div className="row text-center py-5">
          <h2>Amenities & Services</h2>
          <p>Easy, Practical Solutions</p>
        </div>
        <div className="row ">
          <div className="col-md-6 text-center">
            <span
              className="fa fa-solid fa-bed pb-3"
              style={{ fontSize: 35 }}
            ></span>
            <h2 className="pb-2" style={{ fontSize: 24 }}>
              Room Service
            </h2>
            <p>
              We’re happy to provide our guests with a full range of services to
              meet their specific needs. That’s why our Room Service, as well as
              other amenities, are always available. Your happiness is our
              priority!
            </p>
          </div>
          <div className="col-md-6 text-center">
            <span
              className="fa fa-solid fa-bell pb-3"
              style={{ fontSize: 35 }}
            ></span>
            <h2 className="pb-2" style={{ fontSize: 24 }}>
              Late Check-Out
            </h2>
            <p>
              Whether your travel plans changed or something else came up,
              Dandeli Forest Escapes provides you with the flexibility you need.
              Enjoy our Late Check-Out and other amenities when you decide to
              stay with us.
            </p>
          </div>
        </div>
      </div>
      <Galery />
      <Footer />
    </div>
  );
}

export default App;
