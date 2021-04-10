import React, { useState } from "react";
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
import NoteView from "./NoteView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const TabContainerView = ({ notes }) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={notes.notes[0]._id}>
      <Row>
        {notes ? (
          <>
            <Col lg={3}>
              <Nav variant="pills" className="flex-column">
                {notes.notes.map((note) => (
                  <NoteView note={note} key={note._id} noteID={notes._id} />
                ))}
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content style={{ height: "100%" }}>
                {notes.notes.map((note) => (
                  <Tab.Pane
                    eventKey={note._id}
                    key={note._id}
                    style={{ height: "inherit" }}
                  >
                    <Tabs defaultActiveKey="view" id="uncontrolled-tab-example">
                      <Tab
                        eventKey="view"
                        title={<FontAwesomeIcon icon={faEye} />}
                        className="nav-link-blue"
                      >
                        <iframe
                          title={note._id}
                          style={{ width: "100%", height: "100vh" }}
                          src={note.embedded}
                        ></iframe>
                      </Tab>
                    </Tabs>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </>
        ) : (
          <Spinner
            animation="border"
            style={{
              margin: "auto",
              display: "flex",
              width: "5rem",
              height: "5rem",
            }}
          />
        )}
      </Row>
    </Tab.Container>
  );
};

export default TabContainerView;
