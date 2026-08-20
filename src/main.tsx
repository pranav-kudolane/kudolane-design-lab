import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/cards.css';
import './styles/demos.css';
import './styles/designs.css';
import './styles/landings.css';

const root = document.getElementById('root');
if (!root) throw new Error('#root not found in index.html');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
