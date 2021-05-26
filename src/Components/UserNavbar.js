import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardData from "./CardData";
import Loader from "./Loader";

function UserNavbar() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchApi = () => {
    setLoad(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTimeout(() => {
          setItems(json.data);
          setLoad(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">BasicApi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Button onClick={fetchApi} variant="outline-light">
            Get Users
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <CardData items={items} load={load} />
      <Loader load={load} />
    </div>
  );
}

export default UserNavbar;
