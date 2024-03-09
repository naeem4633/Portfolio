import { useEffect } from 'react';

const MusicApp = () => {
  useEffect(() => {
    window.location.reload();
  }, []);

  return null;
};

export default MusicApp;