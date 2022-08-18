import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './components/partials/Layout';
import App from './App';

import './index.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  </Layout>
);
