import React, { useState, useEffect } from "react";
import {
  Tab,
  Row,
  Col,
  Nav,
  Spinner,
  Tabs,
  Container,
  ToggleButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import axios from "axios";

const NoteView = ({ note, noteID }) => {
  const [checked, setChecked] = useState(() => {
    return note.done;
  });

  const [connectionError, setConnectionError] = useState(false);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const noteUpdateObject = {
    isDone: !checked,
    noteId: note._id,
  };

  const doneButtonChangeHandler = () => {
    setChecked(!checked);
    (async () => {
      try {
        await axios.post(
          `/api/modules/${noteID}/notes/update`,
          noteUpdateObject,
          config
        );
      } catch (err) {
        setConnectionError(true);
      }
    })();
  };

  return (
    <Nav.Item key={note._id}>
      <Container>
        <Row>
          <Col sm={9} style={{ paddingLeft: "0px" }}>
            {" "}
            <Nav.Link eventKey={note._id} className="nav-link-black">
              {note.topic}
            </Nav.Link>
          </Col>
          <Col
            sm={3}
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <Switch
              className="mx-auto"
              onChange={doneButtonChangeHandler}
              checked={checked}
              style={{ paddingLeft: "15px", paddingRight: "12px" }}
            />
          </Col>
        </Row>
      </Container>
    </Nav.Item>
  );
};

export default NoteView;
