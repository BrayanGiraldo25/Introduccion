import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import { Enrutador } from './Routes/Enrutador';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Enrutador} />
  </StrictMode>
);