import React, { useEffect, useState } from 'react';
import TabContainerView from '../components/TabContainerView';
import BreadcrumbsView from '../components/BreadcrumbsView';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';

const ModulePage = () => {
  const [modules, setModules] = useState(() => {
    const stickyValue = window.localStorage.getItem('modules');
    return stickyValue !== null ? JSON.parse(stickyValue) : [];
  });
  const [path] = useState(() => {
    return window.location.pathname;
  });
  const [connectionError, setConnectionError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/modules`);
        setModules(result.data);
        window.localStorage.setItem('modules', JSON.stringify(result.data));
      } catch (err) {
        setConnectionError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BreadcrumbsView pathname={window.location.pathname}/>
      {modules && path ? (
        <TabContainerView
          module={modules.find(
            (module) => module.name === path.split('/')[2].replace(/-/g, ' ')
          )}
        />
      ) : (
        <Spinner
          animation="border"
          style={{
            margin: 'auto',
            display: 'flex',
            width: '5rem',
            height: '5rem',
          }}
        />
      )}
    </>
  );
};

export default ModulePage;
