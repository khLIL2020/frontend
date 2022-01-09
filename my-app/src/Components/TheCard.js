import { render } from "@testing-library/react";
import { Card, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from 'axios'
function theCard(props) {
  const { movie } = props;
  const WrappedLink = () => {
    return (
      <Link
        style={{ display: "block", height: "100%" }}
        to={`/movie/${movie.id}`}
        className="link-warning"
      >
        <Card.Img variant="top" src={movie.posterURL} className="Poster" />
        <Card.Title className="title">{movie.title}</Card.Title>
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
          <Button onClick={  async () => {var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "title": movie.title,
  "id": movie.id,
  "description": movie.description,
  "posterURL":movie.posterURL,
  "rating":movie.rating,
  "bandeannonce":movie.bandeannonce,
  "link":movie.link,
  "type":movie.type,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000", requestOptions)
  .then(response => response.text())
  
  .catch(error => console.log('error', error));
  }
}>
  test   
</Button>
<Button onClick={  async () => {var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch(`http://localhost:3000/supprimer/${movie.id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));}}>
    delete
</Button>

<Button onClick={  async () => {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "title": "med"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`http://localhost:3000/changer/${movie.id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}}>
    changer
</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default theCard;
