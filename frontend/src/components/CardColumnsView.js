import React, { Text, useState, useEffect } from "react";
import {
  Card,
  Button,
  CardDeck,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CardView from "./CardView";

const CardColumnsView = ({ modules }) => {
  const [daysLeft, setDaysLeft] = useState();

  useEffect(() => {}, []);

  return (
    <CardDeck>
      {modules.map((module) => (
        <Link
          to={`/module/${module.name.replace(/\s+/g, "-")}`}
          key={module._id}
        >
          <div className="ml-3 mr-3">
            <CardView module={module} />
          </div>
        </Link>
      ))}
    </CardDeck>
  );
};

export default CardColumnsView;
