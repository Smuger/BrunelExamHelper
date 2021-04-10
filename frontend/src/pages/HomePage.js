import CardColumnsView from "../components/CardColumnsView";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert } from "react-bootstrap";

const HomePage = () => {
  const [modules, setModules] = useState(() => {
    const stickyValue = window.localStorage.getItem("modules");
    return stickyValue !== null ? JSON.parse(stickyValue) : [];
  });

  const [connectionError, setConnectionError] = useState(false);

  // Run on load
  useEffect(() => {
    (async () => {
      try {
        await axios.get(`/api/modules`).then(({ data }) => setModules(data));
      } catch (err) {
        setConnectionError(true);
      }
    })();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("modules", JSON.stringify(modules));
  }, [modules]);

  return (
    <>
      {connectionError ? (
        <Alert variant={"danger"}>
          Unable to connect to the server. Please check your internet
          connection.
        </Alert>
      ) : (
        <></>
      )}

      {modules ? (
        <CardColumnsView modules={modules} />
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

export default HomePage;
