import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './style.css'
import App from './App.jsx'
import Solutions from './routes/Solutions.jsx'
import Consultants from './routes/Consultants.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='solutions' element={<Solutions />} />
        <Route path='consultants' element={<Consultants />} />
      </Route>
    </Routes>
    
  </BrowserRouter>,
)
