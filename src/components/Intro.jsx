import { Col, Container, Row } from "react-bootstrap";

const intro = () => {
  return (
    <div className="homepage" id="beranda">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box">
            <Col>
              <h1 className="fw-bold">
                Jelahi Destinasi <span>Indonesia</span> <br /> dari{" "}
                <span>Sabang sampai Merauke</span>
              </h1>
              <p className="w-75 fs-6">
                Kekayaan alam serta budayanya, membuat Nusantara seringkali
                dipilih sebagai tujuan perjalanan oleh para pelancong dari
                setiap sudut dunia. Ayo luangkan waktu untuk mampir ke destinasi
                istimewa di Indonesia!
              </p>
              <a href="#destinasi" className="btn btn-danger p-2">
                Selengkapnya  <i class="fa-solid fa-circle-chevron-right"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default intro;
