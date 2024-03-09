import { useEffect } from 'react';

const EuphoriaApp = () => {
  useEffect(() => {
    window.location.reload();
  }, []);

  return null;
};

export default EuphoriaApp;