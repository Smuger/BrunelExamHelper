import React, { useState } from 'react';
import {
  Tab,
  Row,
  Col,
  Nav,
  Spinner,
  Tabs,
  Container,
  ToggleButton,
} from 'react-bootstrap';
import NoteView from './NoteView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const TabContainerView = ({ module }) => {
  const [pastPapers, setPastPapers] = useState({});

  const [notes, setNotes] = useState(() => {
    if (module) {
      var notesWithPastPapers = module.notes;

      setPastPapers(
        notesWithPastPapers.filter(
          (singleNote) => singleNote.topic === 'Past Papers'
        )[0]
      );

      return notesWithPastPapers.filter((note) => {
        return note.topic !== 'Past Papers';
      });
    }
  });
  const [urlModuleId, setUrlModuleId] = useState(() => {
    if (module) {
      return module._id;
    }
  });

  return (
    <>
      {notes ? (
        <Tab.Container id="left-tabs-example" defaultActiveKey={notes[0]._id}>
          <Row>
            <Col lg={3}>
              <Nav variant="pills" className="flex-column">
                {pastPapers && (
                  <>
                    <NoteView note={pastPapers} moduleId={urlModuleId} />
                    <div
                      style={{
                        borderBottom: '1px solid #eee',
                        marginBottom: '12px',
                        marginTop: '12px',
                      }}
                    ></div>
                  </>
                )}
                {notes.map((note) => (
                  <NoteView note={note} key={note._id} moduleId={urlModuleId} />
                ))}
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content style={{ height: '100%' }}>
                {pastPapers && (
                  <Tab.Pane
                    eventKey={pastPapers._id}
                    style={{ height: 'inherit' }}
                  >
                    <Tabs defaultActiveKey="view" id="uncontrolled-tab-example">
                      <Tab
                        eventKey="view"
                        title={<FontAwesomeIcon icon={faEye} />}
                        className="nav-link-blue"
                      >
                        <iframe
                          title={pastPapers._id}
                          style={{ width: '100%', height: '100vh' }}
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
                    style={{ height: 'inherit' }}
                  >
                    <Tabs defaultActiveKey="view" id="uncontrolled-tab-example">
                      <Tab
                        eventKey="view"
                        title={<FontAwesomeIcon icon={faEye} />}
                        className="nav-link-blue"
                      >
                        <iframe
                          title={note._id}
                          style={{ width: '100%', height: '100vh' }}
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
