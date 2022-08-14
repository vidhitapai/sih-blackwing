import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DSCCode from "./pages/DSCCode";
import DSCPassword from "./pages/DSCPassword";
import UserLogin from "./pages/UserLogin";
import DepartmentUsers from "./pages/DepartmentUsers";
import NewDSCUser from "./pages/NewDSCUser";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nodalofficer/verify" element={<DSCCode/>} />
          <Route path="/nodalofficer/setpassword" element={<DSCPassword/>} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/dsc/users" element={<DepartmentUsers/>} />
          <Route path="/dsc/users/new" element={<NewDSCUser/>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
