import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/Router/routes';


function App() {
  return (
    <div >
      <RouterProvider router={routes} />

    </div>
  );
}

export default App;
