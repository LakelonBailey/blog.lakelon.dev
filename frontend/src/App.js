import './App.css';
import './output.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import AuthHandler from './pages/AuthHandler';

function App(){
 return (
  <BrowserRouter>
    <Routes>
       <Route exact path="/" element={<Home />}></Route>
       <Route exact path="/auth/sso/callback" element={<AuthHandler />}></Route>
       <Route exact path="/error/:errorCode" element={<Error />}></Route>
       <Route path="*" element={<Navigate to="/error/404" replace />} />
    </Routes>
  </BrowserRouter>
 );
}

export default App;