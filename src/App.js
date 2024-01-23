import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/app.scss";
import routes from './routes';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {routes.map((route, key) => {
            const Element = route.component;
            return <Route path={route.href} key={key} element={<Element route={route} />} />
          })}
        </Route>
    </Routes>
  );
}

export default App;
