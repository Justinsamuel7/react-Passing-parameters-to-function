import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Justin from './Justin';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function Recentissue(){
  alert('Jobless 😭')
}


root.render(
  <StrictMode>
    <App />
    <Justin name={'Justin SamuelRaj'} clickfn={Recentissue}/>
  </StrictMode>
);
