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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const testNotes = {
      topic: "Evil Network Computing",
      content: "TEST",
    };

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

  const testModule = {
    name: "Artificial Intelligence (CS3002)",
    description:
      "Unsupervised Learning, Supervised Learning, Neural Networks, Images and Vision, Expert Systems, Deep Learning Image Processing, Deep Learning Natural Language Processing, Bayesian Networks, Hidden Markov Models",
    examlenght: "3h",
    date: "2021-05-12",
    time: "09:30",
  };

  // (async () => {
  //   try {
  //     await axios.post(
  //       `/api/modules/606e4332e896793e104766eb/notes`,
  //       testNotes,
  //       config
  //     );
  //   } catch (err) {
  //     setConnectionError(true);
  //   }
  // })();

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
