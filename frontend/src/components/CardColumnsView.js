import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardView from './CardView';

const CardColumnsView = ({ modules }) => {
  return (
    <CardDeck>
      {modules.map((module) => (
        <Link
          to={`/module/${module.name.replace(/\s+/g, '-')}`}
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
