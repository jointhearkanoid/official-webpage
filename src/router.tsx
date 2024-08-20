import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AppPage from './pages/AppPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<AppPage />} index />
          <Route
            path="/about"
            element={<h1 className=" text-white">About</h1>}
          />
          <Route
            path="/contact"
            element={<h1 className=" text-white">Contact</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
