import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AuthProvider from "./Pages/Context/AuthProvider";
import AddBlog from "./Pages/Dashboard/AddBlog/AddBlog";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManagePosts from "./Pages/Dashboard/ManagePosts/ManagePosts";
import ManageUserPost from "./Pages/Dashboard/ManageUserPost/ManageUserPost";
import ManageUsers from "./Pages/Dashboard/ManageUsers/ManageUsers";
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
            <Route path="/blogDetails/:postId" element={<BlogDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />

            {/* <Route path="/dashboard" element={<DashboardHome></DashboardHome>}></Route> */}
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            <Route path="/dashboard/addBlog" element={<AddBlog />} />
            <Route path="/dashboard/manageUserPost" element={<ManageUserPost />} />
            <Route path="/dashboard/managePost" element={<ManagePosts />} />
            <Route path="/dashboard/manageUser" element={<ManageUsers />} />
            
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
