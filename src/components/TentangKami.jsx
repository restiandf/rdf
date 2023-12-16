import { Col, Container, Row } from "react-bootstrap";
import foto from "../assets/raja_ampat.jpg";
const TentangKami = () => {
  return (
    <div className="tentang_kami" id="tentang_kami">
      <div className="w-100 min-vh-100 text-dark d-flex align-items-center">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <img src={foto} alt="tentang kami" className="rounded" />
            </Col>
            <Col lg="6">
              <h1 className="pb-2 fw-bold">
                <span style={{ color: "#ee2a5a" }}>
                  Indonesia yang luar biasa
                </span>
              </h1>
              <p>
                Wonderland merupakan komitmen kami dalam mempromosikan berbagai
                destinasi nusantara untuk pariwisata domestik dan internasional.
                Berdasarkan apa yang ingin dijelajahi dan dialami wisatawan,
                keajaiban Indonesia dibagi menjadi lima kategori: Alam, Kuliner
                & Kesehatan, Seni & Warisan, Rekreasi & Kenyamanan, dan
                Petualangan.
                <br />
                <br /> Wonderland menyambut semua merek, institusi, dan pemangku
                kepentingan pariwisata untuk menjalin kemitraan dan membantu
                menyebarkan informasi tentang banyaknya keajaiban di Indonesia.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TentangKami;
