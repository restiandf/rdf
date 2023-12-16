import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Kontak = () => {
  return (
    <div className="kontak w-100 min-vh100 bg-light" id="kontak">
      <section>
        <Container className="pt-5">
          <h1 className="fw-bold text-dark">Kontak Kami</h1>
          <p className="text-dark">Telusuri informasi yang kamu butuhkan</p>
        </Container>
      </section>
      <Container className="py-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            <span className="brand fs-1" style={{ color: "#ee2a5a" }}>
              Wonderland
            </span>
            <p style={{ color: "#6C757D" }} className="pt-3">
              Semua isi yang tercantum di dalam situs ini bertujuan untuk
              memberikan informasi dan bukan sebagai tujuan komersial.
            </p>
            <section className="py-3">
              <a href="#" className="me-3">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="#" className="m-3">
                <i class="fa-brands fa-square-x-twitter fa-xl"></i>
              </a>
              <a href="#" className="m-3">
                <i class="fa-brands fa-square-instagram fa-xl"></i>
              </a>
              <a href="#" className="m-3">
                <i class="fa-brands fa-linkedin fa-xl"></i>
              </a>
            </section>
          </div>
          <div className="col-lg-6 order-first order-md-last pb-4">
            <h5 className="pb-2">Hubungi Kami</h5>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Nama"
              />
              <label for="floatingInput">Nama Lengkap</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Email"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Masukan pesan disini"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Pesan</label>
            </div>
            <button class="btn btn-primary opacity-75 w-100 py-3" type="button">
              Kirim
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Kontak;
