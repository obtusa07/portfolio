import React, { useRef } from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';

function App() {
  const currentRef = useRef(null);

  return (
    <>
      <A currentRef={currentRef} />
      <B/>
      <C/>
      <D ref={currentRef}/>
    </>
  );
}

export default App;
