import React, { useEffect, useState } from "react";
import TabContainerView from "../components/TabContainerView";
import BreadcrumbsView from "../components/BreadcrumbsView";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const ModulePage = () => {
  const [modules, setModules] = useState(() => {
    const stickyValue = window.localStorage.getItem("modules");
    return stickyValue !== null ? JSON.parse(stickyValue) : [];
  });
  const [path, setPath] = useState(() => {
    return window.location.pathname;
  });

  const [connectionError, setConnectionError] = useState(false);
  const [foundModule, setFoundModule] = useState();

  return (
    <>
      <BreadcrumbsView />
      {modules && path ? (
        <TabContainerView
          notes={modules.find(
            (module) => module.name === path.split("/")[2].replace(/-/g, " ")
          )}
        />
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
    </>
  );
};

export default ModulePage;
