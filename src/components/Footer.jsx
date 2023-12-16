import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="kontak w-100 min-vh100 bg-light" id="kontak">
      <section style={{ background: "#002745" }}>
        <Container className="py-4 d-flex justify-content-center">
          <p className="text-light fs-6">Copyright © 2023 Restian Dwi Friwaldi</p>
        </Container>
      </section>
    </div>
  );
};
export default Footer;
