import { render } from "@testing-library/react";
import { Card, Button } from "react-bootstrap";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { film } from "./Films";
import "./styles.css";

const Detail = () => {
  let { id } = useParams();

  const movie = film.find((movie) => movie.id === id);

  render();
  {
    return (
      <div>
        <Card
          className="Detail"
          dir="ltr"
          style={{
            display: "flex",
            width: "110rem",
            padding: "10px"
          }}
        >
          <Card.Img
            variant="top"
            src={movie.posterURL}
            styles={{ width: "10px" }}
            className="Poster"
          />

          <Card.Body className="CardBody">
            <Card.Title className="title">{movie.title}</Card.Title>
            <Card.Text className="paragraph">{movie.description}</Card.Text>
            <br /> <br />
            <br />
            <br />
            <iframe
              className="video"
              width="350"
              height="240"
              src={movie.bandeannonce}
              title={movie.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <br />
            <br /> <br />
            <br />
            <input
              id="input-id"
              name="input-name"
              type="number"
              class="rating"
              mouseEnabled={false}
              step={0.5}
              default={5}
              stars={11}
              data-size="lg"
              data-rtl="true"
            />
            <Button>
              <a href={movie.link} className="link-warning">
                Buy products
              </a>{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
};
export default Detail;
