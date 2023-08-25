import "./App.css";
import { Route, Navigate, BrowserRouter, Routes  } from "react-router-dom";
import { Dashboard } from "./components/pages/Dashboard";
import { Stats } from "./components/pages/Stats";
import { Report } from "./components/pages/Report";
import { Login } from "./components/pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Admin } from "./components/pages/Admin";

function App() {

  const isConnected = false

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={useSelector((state: RootState) => state.user.user.isConnected) ? <Navigate replace to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={useSelector((state: RootState) => state.user.user.isConnected) ? <Dashboard /> : <Navigate replace to="/login" />} />
          <Route path="/report" element={useSelector((state: RootState) => state.user.user.isConnected) ? <Report /> : <Navigate replace to="/login" />} />
          <Route path="/stats" element={useSelector((state: RootState) => state.user.user.isConnected) ? <Stats /> : <Navigate replace to="/login" />} />
          <Route path="/admin" element={useSelector((state: RootState) => state.user.user.isConnected) ? <Admin /> : <Navigate replace to="/login" />} />
          <Route path="/" element={useSelector((state: RootState) => state.user.user.isConnected) ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
          <Route path="*" element={useSelector((state: RootState) => state.user.user.isConnected) ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
