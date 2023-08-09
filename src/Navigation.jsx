import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navigation = ({ appName, about, mode, handletoggleMode, handleBlue }) => {
  return (
    <Navbar bg={mode} style={{ backgroundColor: mode }} expand="lg">
      <Container>

        <Link to="/" className={`text-${mode === "light" ? "dark" : "light"}`}  style={{textDecoration:"none",marginRight:"8px",fontWeight:'bold',fontSize:'1.5rem'}} >
          {appName}
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/" className={`text-${mode === "light" ? "dark" : "light"}`} style={{textDecoration:"none",marginRight:"8px"}}>
              Home
            </Link>

            <Link
              to="About" style={{textDecoration:"none"}}
              className={`text-${mode === "light" ? "dark" : "light"}`}
            >
              {about}
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Form className={`text-${mode === "light" ? "dark" : "light"}`}>
        <Form.Check
          onClick={handletoggleMode}
          type="switch"
          id="custom-switch"
          label={mode === "light" ? "Dark Mode" : "Light Mode"}
        />
      </Form>
      </Container>
     
      <Button onClick={handleBlue} style={{ backgroundColor: "#090979" }}></Button>
      <Button variant="secondary"></Button>
      <Button variant="success"></Button>
      <Button variant="warning"></Button>
      <Button variant="danger"></Button>
      <Button variant="info"></Button>
    </Navbar>
  );
};

Navigation.protoTypes = {
  appName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navigation.defaultProps = { appName: "Add App Name", about: "Add About Page" };

export default Navigation;
