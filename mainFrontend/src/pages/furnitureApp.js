import { useEffect } from 'react';

const FurnitureApp = () => {
  useEffect(() => {
    window.location.reload();
  }, []);

  return null;
};

export default FurnitureApp;