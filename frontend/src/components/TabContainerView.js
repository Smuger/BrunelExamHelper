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

const TabContainerView = ({ module }) => {
  const [pastPapers, setPastPapers] = useState({});
  const [notes, setNotes] = useState(() => {
    if (module) {
      var notesWithPastPapers = module.notes;

      setPastPapers(
        notesWithPastPapers.filter(
          (singleNote) => singleNote.topic === "Past Papers"
        )[0]
      );

      return notesWithPastPapers.filter((note) => {
        return note.topic !== "Past Papers";
      });
    }
  });

  // const [pastPapers, setPastPapers] = useState(() => {
  //   return notes.splice(
  //     notes.filter((singleNote) => singleNote.topic === "Past Papers"),
  //     1
  //   )[0];
  // });

  return (
    <>
      {notes ? (
        <Tab.Container id="left-tabs-example" defaultActiveKey={notes[0]._id}>
          <Row>
            <Col lg={3}>
              {console.log(pastPapers)}
              <Nav variant="pills" className="flex-column">
                {pastPapers && (
                  <NoteView note={pastPapers} noteID={notes._id} />
                )}
                {notes.map((note) => (
                  <NoteView note={note} key={note._id} noteID={notes._id} />
                ))}
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content style={{ height: "100%" }}>
                {pastPapers && (
                  <Tab.Pane
                    eventKey={pastPapers._id}
                    style={{ height: "inherit" }}
                  >
                    <Tabs defaultActiveKey="view" id="uncontrolled-tab-example">
                      <Tab
                        eventKey="view"
                        title={<FontAwesomeIcon icon={faEye} />}
                        className="nav-link-blue"
                      >
                        <iframe
                          title={pastPapers._id}
                          style={{ width: "100%", height: "100vh" }}
                          src={pastPapers.embedded}
                        ></iframe>
                      </Tab>
                    </Tabs>
                  </Tab.Pane>
                )}
                {notes.map((note) => (
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
          </Row>
        </Tab.Container>
      ) : (
        <>Error, embedded URL not found for this note</>
      )}
    </>
  );
};

export default TabContainerView;
