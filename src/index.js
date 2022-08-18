import React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from './components/partials/Layout';
import App from './App';

import './index.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Layout>
    <App />
  </Layout>,
);
