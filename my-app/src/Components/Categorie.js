import { render } from "@testing-library/react";
import { Card, Button } from "react-bootstrap";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Film(props) {
  const { movie } = props;
  const WrappedLink = () => {
    return (
      <Link
        style={{ display: "block", height: "100%" }}
        to={`/movie/${movie.id}`}
        className="link-warning"
      >
        <Card.Img variant="top" src={movie.posterURL} className="Poster" />
      </Link>
    );
  };
  render();

  {
    return (
      <Card
        dir="ltr"
        className="Home"
        style={{
          display: "flex",

          width: "35rem",

          padding: "10px"
        }}
      >
        <Card.Body>
          <WrappedLink>
            <Button className="Button"></Button>
          </WrappedLink>
        </Card.Body>
      </Card>
    );
  }
}
export default Film;
