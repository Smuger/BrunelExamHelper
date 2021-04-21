import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreadcrumbsView = ({ pathname }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: { pathname } }}>
        {pathname.split('/')[2].replace(/-/g, ' ')}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbsView;
