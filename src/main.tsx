import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dungeon from './pages/Dungeon';
import Guild from './pages/Guild';
import Home from './pages/Home';
import Login from './pages/Login';
import MyInfo from './pages/MyInfo';
import Quest from './pages/Quest';
import Register from './pages/Register';
import './styles/index.css';


createRoot(document.getElementById('root')!).render(
  <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/guild" element={<Guild />} />
          <Route path="/dungeon" element={<Dungeon />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<Layout showHeaderFooter={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  </>
)
