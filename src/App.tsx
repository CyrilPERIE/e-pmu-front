import "./App.css";
import { Route, Navigate, BrowserRouter, Routes  } from "react-router-dom";
import Main from "./components/Main";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
