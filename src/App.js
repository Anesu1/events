
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
import MerchantDetails from "./components/MerchantDetails";
import PosAppStatus from "./components/PosAppStatus";
import PosMachine from "./components/PosMachine";
import Terminal from "./components/Terminal";
import Task from "./components/Task";
import Branch from "./components/Branch";
import AllocateTerminal from "./components/AllocateTerminal";
import Activities from "./components/Activities";
import Portfolio from "./components/Portfolio";
import Merchants from "./pages/Merchants";
import TerminalsPage from "./pages/TerminalsPage";
import DevicesPage from "./pages/DevicesPage";
import TasksPage from "./pages/TasksPage";
import ActivitiesPage from "./pages/Activities";

function App() {
  
  const [authToken, setIsAuthToken] = useState("");

  const { user } = useSelector(state => state.auth)
  
  
  useEffect(() => {
    setIsAuthToken(user);
  },[user])

  useEffect(() => {
    let mytoken = localStorage.getItem("user");
    setIsAuthToken(mytoken)
  },[])
  return (
    <>
      <Router basename="/">
        {/* <MerchantDetails /> 
        <PosAppStatus />
        <PosMachine />
        <Terminal />
        <Task />
  <Branch />
  <AllocateTerminal />
        <Activities />*/}
        {/* <Portfolio /> */}

        <Routes>
          {authToken ? (
            <>
              <Route path="/" element={<Dashboard />}>
                <Route path="merchants" element={<Merchants />} />
                <Route path="merchants/add" element={<MerchantDetails />} />
                <Route path="terminals" element={<TerminalsPage />} />
                <Route path="terminals/add" element={<Terminal />} />
                <Route path="devices" element={<DevicesPage />} />
                <Route path="devices/add" element={<PosMachine />} />
                <Route path="tasks" element={<TasksPage />} />
                <Route path="tasks/add" element={<Task />} />
                <Route path="activities" element={<ActivitiesPage />} />
                <Route path="activities/add" element={<Activities />} />

                {/* <Route path="tasks" element={<DashboardTasks />} /> */}
              </Route>
            </>
          ) : (
            <>
              <Route element={<Register />} exact path="/register" />
              <Route element={<Login />} exact path="/login" />
            </>
          )}

          {/* <Route
            path="*"
            element={<Navigate to={!authToken ? "/login" : "/"} />}
          /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
