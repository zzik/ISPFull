import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return <>
    {/* <Header /> */}
    <Outlet />
    <Footer />
  </>
}

export default App
