import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="ui top attached black menu">
        <div
          role-has-required-aria-props="listbox"
          aria-expanded="false"
          className="ui item simple dropdown"
          tabIndex="0"
        >
          <i aria-hidden="true" className="wrench icon"></i> MENU
          <div className="menu transition">
            <Link to="/dashboard">
            <div role-has-required-aria-props="option" className="item">
              <i aria-hidden="true" className="dashboard icon"></i> Dashboard
            </div>
            </Link>
            <Link to="/streams">
            <div role-has-required-aria-props="option" className="item">
              <i aria-hidden="true" className="video icon"></i> Streams
            </div>
            </Link>

            <Link to="/playback">
            <div role-has-required-aria-props="option" className="item">
              <i aria-hidden="true" className="file video icon"></i> Playback
            </div>
            </Link>  

            <Link to="/help">
            <div role-has-required-aria-props="option" className="item">
              <i aria-hidden="true" className="help icon"></i> Help
            </div>
            </Link>  
            
            <div className="divider"></div>
            <div className="header">Tools</div>
            <Link to="/settings">
            <div role-has-required-aria-props="option" className="item">
              <i aria-hidden="true" className="settings icon"></i> Settings
            </div>
            </Link>
            <Link to="/profile">
            <div role-has-required-aria-props="option" className="item">
              <i aria-hidden="true" className="user icon"></i> Profile
            </div>
            </Link>
            <Link to="/logout">
            <div role-has-required-aria-props="option" className="item">
              <i aria-hidden="true" className="logout icon"></i> Logout
            </div>
            </Link>
          </div>
        </div>
        <div className="right menu">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                type="text"
                className="prompt"
                placeholder="Search ..."
              />
              <i className="search link icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
