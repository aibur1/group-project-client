import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AuthProvider from "./Pages/Context/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import BlogDetails from "./Pages/Home/BlogDetails/BlogDetails";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import './Style/Style.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
