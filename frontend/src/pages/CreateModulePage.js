import React, { useEffect, useState } from 'react';
import { Alert, Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateModulePage = () => {
  const [module] = useState(() => {
    return window.location.pathname.split('/')[2].replace(/-/g, ' ');
  });
  const [moduleID, setModuleID] = useState('');
  const [connectionError, setConnectionError] = useState(false);

  const [topic, setTopic] = useState('');
  const [docEdit, setDocEdit] = useState('');
  const [docEmbedded, setDocEmbedded] = useState('');
  const [video, setVideo] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setModuleID(
          JSON.parse(window.localStorage.getItem('modules')).filter(
            (mod) => mod.name === module
          )[0]._id
        );
      } catch (err) {
        setConnectionError(true);
      }
    };
    fetchData();
  }, [module]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const newNote = {
        topic,
        docEdit,
        docEmbedded,
        video,
      };

      await axios.post(`/api/modules/${moduleID}/notes`, newNote, config);

      let path = `/`;
      history.push(path);
    } catch (err) {
      setConnectionError(true);
    }
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        {connectionError ? (
          <Alert variant={'danger'}>
            Unable to connect to the server. Please check your internet
            connection.
          </Alert>
        ) : (
          <></>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Module</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={module}
              disabled={true}
            />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type="text"
              placeholder="Hidden Markov Models"
              onChange={(e) => setTopic(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Google Doc Edit URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Edit"
              onChange={(e) => setDocEdit(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Google Doc Embedded URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Embedded"
              onChange={(e) => setDocEmbedded(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Embedded"
              onChange={(e) => setVideo(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateModulePage;
