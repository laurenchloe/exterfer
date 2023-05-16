import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// this provides routing information to other elements to help the webpage function
import { BrowserRouter} from "react-router-dom";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);

