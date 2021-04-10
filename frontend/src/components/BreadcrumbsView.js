import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const BreadcrumbsView = () => {
  const pathname = window.location.pathname;

  return (
    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: { pathname } }}>
        {pathname.split("/")[2]}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbsView;
