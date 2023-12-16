import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-white fixed-top py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span className="brand" style={{ color: "#ee2a5a" }}>
            Wonderland
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#beranda">Beranda</Nav.Link>
            <Nav.Link href="#tentang_kami">Tentang Kami</Nav.Link>
            <Nav.Link href="#destinasi">Destinasi</Nav.Link>
            <Nav.Link href="#inspirasi_seru">Inpirasi Seru</Nav.Link>
            <Nav.Link href="#kontak">Kontak</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div class="input-group">
              <input
                type="search"
                placeholder="Apa yang kamu cari?"
                aria-describedby="button-addon1"
                class="form-control border-0 bg-light"
              />
              <div class="input-group-append">
                <button
                  id="button-addon1"
                  type="submit"
                  class="btn btn-link text-primary border-0 bg-light"
                >
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
