import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Admin from './page/admin';
import Test from './page/test'

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test />} />
      </Routes>
  )
}

export default Router;




