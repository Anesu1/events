import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

import MyCalendar from "./pages/MyCalendar";
import AddEvent from "./components/AddEvent";
import Events from "./pages/Events";
import EditDetails from "./components/EditDetails";


function App() {
  const [authToken, setIsAuthToken] = useState(false);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsAuthToken(user);
  }, [user]);
  return (
    <>
      <Router>
        <Routes>
          {authToken ? (
            <>
              {/* Logged in routes  */}
              <Route path="/" element={<Dashboard />}>
                <Route path="events" element={<Events />} />
                <Route path="events/add" element={<AddEvent />} />
                <Route path="events/edit/:id" element={<EditDetails />} />
                <Route path="calendar" element={<MyCalendar />} />
              </Route>
            </>
          ) : (
            <>
              {/* logged out routes  */}
              <Route element={<Register />} exact path="/register" />
              <Route element={<Login />} exact path="/login" />
            </>
          )}

          <Route
            path="*"
            element={<Navigate to={!authToken ? "/login" : "/events"} />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
