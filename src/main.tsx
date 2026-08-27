// Ensure fetch property on window is writable and configurable to prevent errors with polyfills
try {
  if (typeof window !== 'undefined') {
    let currentFetch = window.fetch;
    try {
      Object.defineProperty(window, 'fetch', {
        get: () => currentFetch,
        set: (fn) => { currentFetch = fn; },
        configurable: true,
        enumerable: true,
      });
    } catch {
      try {
        const proto = Object.getPrototypeOf(window) || Window.prototype;
        if (proto) {
          Object.defineProperty(proto, 'fetch', {
            get: () => currentFetch,
            set: (fn) => { currentFetch = fn; },
            configurable: true,
            enumerable: true,
          });
        }
      } catch {}
    }
  }
} catch {}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
