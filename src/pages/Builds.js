import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';

function Builds() {
  useEffect(() => {
    document.title = 'TwinkDB - Builds';
  }, []);

  return (
    <Outlet />
  );
}

export default Builds;
