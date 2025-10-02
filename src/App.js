import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import DocentePerfil from "./docente/DocentePerfil";
import './index.css';
import Designaciones from './docente/Designaciones';
import HistorialDesignaciones from './docente/HistorialDesignaciones';

import Docente from './docente/Docente';
import DocenteConfig from './docente/DocenteConfig';
import HistorialEstudiante from './docente/HistorialEstudiante';
import BuscarEstudiantes from './docente/BuscarEstudiante';
import ListadoMaterias from './docente/ListadoMaterias';
import Notificaciones from './docente/Notificaciones';
import Menu from './components/Menu';
import NotificacionesAnteriores from './docente/NotificacionesAnteriores';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<DocentePerfil />} />
      </Routes>
    </Router>
  );
}

export default App;