import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ProgressBar, Spinner } from 'react-bootstrap';

const CardView = ({ module }) => {
  const [daysLeft, setDaysLeft] = useState();
  const [noteDone, setNoteDone] = useState();
  const [numberOfNotes, setNumberOfNotes] = useState();
  const [cardIsActive, setCardIsActive] = useState(true);

  useEffect(() => {
    (() => {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

      const examDate = new Date(module.date);
      const currentDate = new Date();

      const diffDays =
        Math.abs((examDate - currentDate) / oneDay) > 1
          ? Math.round((examDate - currentDate) / oneDay)
          : 0;

      setDaysLeft(diffDays);
      (examDate - currentDate) / oneDay > 0
        ? setCardIsActive(true)
        : setCardIsActive(false);
    })();

    setNoteDone(
      module.notes.filter((note) => {
        return note.done === true;
      }).length
    );
    setNumberOfNotes(module.notes.length);
  }, [module]);

  const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return (
    <div>
      <Card className={cardIsActive ? '' : 'inactive'}>
        <Card.Body>
          <Card.Title>{module.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Date:{' '}
              <p style={{ fontWeight: 'bold' }}>
                {day[new Date(module.date).getDay()]}{' '}
                {new Date(module.date).getDate()}
                {'/'}
                {new Date(module.date).getMonth() + 1}
                {'/'}
                {new Date(module.date).getUTCFullYear()}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              Time: <p style={{ fontWeight: 'bold' }}>{module.time}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              Exam length:{' '}
              <p style={{ fontWeight: 'bold' }}>{module.examlenght}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ textAlign: 'center' }}>
              Days left:{' '}
              {daysLeft > -1 ? (
                <ProgressBar animated now={100 - daysLeft} max={100} />
              ) : (
                <ProgressBar now={100 - daysLeft} max={100} />
              )}
              {daysLeft >= 0 ? (
                <p style={{ fontWeight: 'bold' }}>{daysLeft}</p>
              ) : (
                <p style={{ fontWeight: 'bold' }}>0</p>
              )}
            </ListGroup.Item>
            <ListGroup.Item style={{ textAlign: 'center' }}>
              Topics to revise left:{' '}
              {daysLeft > -1 ? (
                <ProgressBar
                  variant="success"
                  animated
                  now={noteDone}
                  max={numberOfNotes}
                />
              ) : (
                <ProgressBar
                  variant="success"
                  now={noteDone}
                  max={numberOfNotes}
                />
              )}
              {daysLeft >= 0 ? (
                <p style={{ fontWeight: 'bold' }}>{numberOfNotes - noteDone}</p>
              ) : (
                <p style={{ fontWeight: 'bold' }}>0</p>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardView;
