import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Streams from "./components/Streams";
import Playback from "./components/Playback";
import Help from "./components/Help";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AdminLogin from "./components/admin/Admin_login";
import Secret from "./components/admin/Secret";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* User Routes */}
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/streams">
            <Streams />
          </Route>
          <Route path="/playback">
            <Playback />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/logout">
            <Login />
          </Route>

          {/* Admin Routes */}
          <Route path="/secret">
            <Secret />
          </Route>
          <Route path="/admin_login">
            <AdminLogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
