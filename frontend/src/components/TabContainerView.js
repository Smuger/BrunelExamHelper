import React from "react";
import { Tab, Row, Col, Nav, Spinner, Tabs } from "react-bootstrap";
import MyEditor from "./MyEditor";
import TextEditor from "./TextEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import PostDisplay from "../utility/PostDisplay";
import Iframe from "react-iframe";

const TabContainerView = ({ notes }) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={notes.notes[0]._id}>
      <Row>
        {notes ? (
          <>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {notes.notes.map((note) => (
                  <Nav.Item key={note._id}>
                    <Nav.Link eventKey={note._id} className="nav-link-black">
                      {note.topic}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
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
