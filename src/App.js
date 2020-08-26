import React, { Fragment } from 'react';
import './App.css';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';

function App() {
  return (
    <Fragment>
      <SassComponent />
      <CSSModule />
      <StyledComponent />
    </Fragment>
  );
}

export default App;
