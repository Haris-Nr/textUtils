import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const TextForm = ({ heading, mode, message }) => {
  const [text, setText] = useState("");

  const handleText = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text === ""
      ? message("Enter Text", "warning")
      : message("Converted to UpperCase!", "success");
  };

  const handlelowText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text === ""
      ? message("Enter Text", "warning")
      : message("Converted to LowerCase!", "success");
  };

  const handlerestText = () => {
    let newText = "";
    setText(newText);
    text === ""
      ? message("Enter Text", "warning")
      : message("Clear Data!", "success");
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text === ""
      ? message("Enter Text", "warning")
      : message("Remove Extra Spaces!", "success");
  };

  const handleCapitalize = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    text === ""
      ? message("Enter Text", "warning")
      : message("Converted to Capitalize!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    text === ""
      ? message("Enter Text", "warning")
      : message("Copy to ClipBoard!", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Container className="my-5">
        <h1>{heading}</h1>
        <Form className="my-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              id="box"
              rows={8}
              value={text}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="dark"
            onClick={handleText}
            disabled={text.length === 0}
          >
            Change UpperCase
          </Button>

          <Button
            variant="dark"
            className="mx-1"
            onClick={handlelowText}
            disabled={text.length === 0}
          >
            Change LowerCase
          </Button>

          <Button
            variant="dark"
            className="mx-1"
            onClick={handlerestText}
            disabled={text.length === 0}
          >
            Clear
          </Button>

          <Button
            variant="dark"
            className="mx-1"
            onClick={handleSpace}
            disabled={text.length === 0}
          >
            clear Space
          </Button>

          <Button
            variant="dark"
            className="mx-1 mt-2"
            onClick={handleCapitalize}
            disabled={text.length === 0}
          >
            Capitalize
          </Button>

          <Button
            variant="dark"
            className="mx-1 mt-2"
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy
          </Button>
        </Form>
      </Container>

      <Container>
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((space) => {
              return space.length !== 0;
            }).length
          }
          Words and {text.length}Characters
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((space) => {
              return space.length !== 0;
            }).length}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </Container>
    </div>
  );
};

export default TextForm;
