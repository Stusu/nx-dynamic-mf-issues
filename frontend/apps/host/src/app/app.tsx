import * as React from 'react';
import { loadRemoteModule } from '@nx/react/mf';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

const FirstRemote = React.lazy(() =>
  loadRemoteModule('first-remote', './Module')
);


export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/first-remote">First remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/first-remote" element={<FirstRemote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
