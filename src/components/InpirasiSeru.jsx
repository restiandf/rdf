import { Col, Container, Row } from "react-bootstrap";
import { InspirasiSeru } from "../data/index";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArrowCustom(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="panah"
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const InpirasiSeru = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <ArrowCustom />,
    prevArrow: <ArrowCustom />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="inspirasi w-100 min-vh100 bg-white pb-5"
      id="inspirasi_seru"
    >
      <Container>
        <Row>
          <Col className="py-5">
            <h1 className="fw-bold">Ide Liburan</h1>
            <p>
              Beragam ide liburan penuh keseruan ini menanti #DiIndonesiaAja
            </p>
          </Col>
        </Row>
        <div className="ide">
          <Slider {...settings}>
            {InspirasiSeru.map((inspirasi) => {
              return (
                <div class="card" style="width: 10rem;">
                  <img src={inspirasi.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <a href={inspirasi.id} className="desc">
                      {inspirasi.desc}
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default InpirasiSeru;
