import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './Components/utils/NavigationRouter';
import Layout from './Components/utils/Layout';

function App() {
  const routeElements = routes.map(({id, path, Element}) => (
    <Route key={id} path={path} element={<Element />} />
  ));

  return (
    <div className="App">
      <Routes>
        <Route element ={<Layout />}>
          {routeElements}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
