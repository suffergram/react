import { createRoot } from 'react-dom/client';
import App from './App/App';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import './style.css';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
