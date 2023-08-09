// import React, { useState } from 'react'
import { Accordion, Container } from "react-bootstrap";

const About = ({ mode }) => {
  // const [mystyle, setmyStyle] = useState(
  //     {
  //         color: "black",
  //         backgroundColor: "white"
  //     }
  // )

  // const [btnText, setbtnText] = useState("Dark Mode")

  //   const handleTogggle=()=>{
  //     if(mystyle.color==="black"){
  //         setmyStyle({
  //             color: "white",
  //         backgroundColor: "black",
  //         border:"1px solid white"
  //     })
  //         setbtnText("Light Mode")
  //     }else{
  //         setmyStyle({
  //             color: "black",
  //         backgroundColor: "white"
  //     })

  //         setbtnText("Dark Mode")
  //     }
  //   }

  let mystyle = {
    color: mode === "dark" ? "white" : "#042743",
    backgroundColor: mode === "dark" ? "#042743" : "white",
  };

  return (
    <Container style={mystyle} className="my-5">
      <h1>About Us</h1>
      <Accordion defaultActiveKey="0" className="my-3" style={mystyle}>
        <Accordion.Item eventKey="0" style={mystyle}>
          <Accordion.Header style={mystyle}>Accordion Item #1</Accordion.Header>
          <Accordion.Body style={mystyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={mystyle}>
          <Accordion.Header style={mystyle}>Accordion Item #2</Accordion.Header>
          <Accordion.Body style={mystyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Button variant="primary" onClick={handleTogggle}>{btnText}</Button> */}
    </Container>
  );
};

export default About;
