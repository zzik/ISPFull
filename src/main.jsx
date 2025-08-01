import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './style.css'
import App from './App.jsx'
import Consultants from './routes/Consultants.jsx'
import Home from './routes/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index='true' element={<Home/>} />
        <Route path='consultants' element={<Consultants />} />
      </Route>
    </Routes>
    
  </BrowserRouter>,
)
