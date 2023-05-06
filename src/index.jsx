import './style.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
