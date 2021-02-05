import { useState } from "react";
import { useHistory } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if(username && password !== ""){ 
      setError(null)
      console.log(username, password);
    } else {
      setError("username or Password cannot be empty");
    }
  };

  return (
    <div className="admin-login">
      
      <div className="ui card">
        <div className="content">
          <img src="/security.svg" alt="loginsvg"/>
        
          {error && <div className="ui negative message">❌ &nbsp;{error}</div>}

          <form className="ui form" onSubmit={handleAdminLogin}>
            <div className="field">
              <label>Admin Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
              />
            </div>
            <div className="field">
              <label>Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**************"
              />
            </div>
            <button type="submit" className="ui fluid black button">
              check
            </button>
          </form>

        </div>
        
        </div>

    </div>
  );
};

export default AdminLogin;
