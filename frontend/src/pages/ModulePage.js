import React, { useEffect, useState } from "react";
import TabContainerView from "../components/TabContainerView";
import BreadcrumbsView from "../components/BreadcrumbsView";
import { Spinner } from "react-bootstrap";

const ModulePage = () => {
  const [modules] = useState(() => {
    const stickyValue = window.localStorage.getItem("modules");
    return stickyValue !== null ? JSON.parse(stickyValue) : [];
  });
  const [path] = useState(() => {
    return window.location.pathname;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
