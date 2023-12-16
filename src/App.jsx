import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css";
import Intro from "./components/Intro";
import TentangKami from "./components/TentangKami";
import Destinasi from "./components/Destinasi";
import InpirasiSeru from "./components/InpirasiSeru";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
      </div>
      <div className="Intro">
        <Intro />
      </div>

      <div className="TentangKami">
        <TentangKami />
      </div>

      <div className="Destinasi">
        <Destinasi />
      </div>

      <div className="InpirasiSeru">
        <InpirasiSeru />
      </div>

      <div className="Kontak">
        <Kontak />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
