import './App.css';
import Dashboard from './dashboard';
import Login from './dashboard/bar-chart/login';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
