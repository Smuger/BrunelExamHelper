import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  CardDeck,
  ListGroup,
  ProgressBar,
  Spinner,
} from "react-bootstrap";

const CardView = ({ module }) => {
  const [daysLeft, setDaysLeft] = useState();

  useEffect(() => {
    const CalculateDaysLeft = () => {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

      const examDate = new Date(module.date);
      const currentDate = new Date();

      const diffDays = Math.round(Math.abs((examDate - currentDate) / oneDay));

      setDaysLeft(diffDays);
    };
    CalculateDaysLeft();
  }, []);

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{module.name}</Card.Title>

          <ListGroup variant="flush">
            <ListGroup.Item>
              Date:{" "}
              <p style={{ fontWeight: "bold" }}>
                {day[new Date(module.date).getDay()]}{" "}
                {new Date(module.date).getDate()}
                {"/"}
                {new Date(module.date).getMonth() + 1}
                {"/"}
                {new Date(module.date).getUTCFullYear()}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              Time: <p style={{ fontWeight: "bold" }}>{module.time}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              Exam length:{" "}
              <p style={{ fontWeight: "bold" }}>{module.examlenght}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ textAlign: "center" }}>
              Days left: <ProgressBar animated now={100 - daysLeft} />
              {daysLeft ? (
                <p style={{ fontWeight: "bold" }}>{daysLeft}</p>
              ) : (
                <Spinner
                  animation="border"
                  style={{
                    margin: "auto",
                    display: "flex",
                    width: "1rem",
                    height: "1rem",
                  }}
                />
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardView;
