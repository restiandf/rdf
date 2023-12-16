import { Col, Container, Row } from "react-bootstrap";
import { DestinasiTerbaru } from "../data/index";

const Destinasi = () => {
  return (
    <div className="destinasi w-100 min-vh100 bg-light pb-5" id="destinasi">
      <Container>
        <Row>
          <Col className="py-5">
            <h1 className="fw-bold">Destinasi Pilihan</h1>
            <p>
              Ayo luangkan waktu untuk mampir ke destinasi istimewa berikut dan
              bersiaplah untuk jatuh hati pada pesonanya!
            </p>
          </Col>
        </Row>
        <Row xs={2} md={2} lg={4} className="g-4">
          {DestinasiTerbaru.map((destinasi) => {
            return (
              <Col key={destinasi.id} className="mb-4">
                <div class="card border-0">
                  <div className="inner">
                    <img
                      src={destinasi.image}
                      class="card-img-top rounded-1"
                      alt="..."
                    />
                  </div>

                  <div class="card-img-overlay">
                    <h5 class="card-title text-light">{destinasi.title}</h5>
                    <a
                      href="#"
                      class="text-decoration-none text-light fs-6 fw-medium"
                      style={{ position: "absolute", bottom: 5, right: 5 }}
                    >
                      Lihat <i class={destinasi.buy}></i>
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Destinasi;
