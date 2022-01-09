import { render } from "@testing-library/react";
import { Card, Button } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from 'axios'
import { useParams } from "react-router-dom";
function Film(props) {
  let { id } = useParams();
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
  }
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
