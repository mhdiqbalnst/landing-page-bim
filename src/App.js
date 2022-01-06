import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './view/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index  path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
