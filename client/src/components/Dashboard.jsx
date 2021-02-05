import { Link } from "react-router-dom";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <>
      <Menu />
      <div className="dashboard-page">
        <div className="ui fluid raised card">
          <img
            src="/banner.png"
            alt="banner"
            style={{ height: 120, objectFit: "cover", position: "center" }}
          />
        </div>
        <div className="ui divider"></div>

        <h3>
          <i className="ui grey plug icon"></i> Quick Links
        </h3>

        <div className="ui stackable grid">
          <div className="ten wide column">
            <div className="ui stackable two column grid">
              <div className="column">
                <Link to="/streams">
                  <div className="ui center aligned raised segment">
                    <i className="video grey huge icon"></i>
                    {/* <div className="ui divider"></div> */}
                    <p>STREAMS</p>
                  </div>
                </Link>
              </div>

              <div className="column">
                <Link to="/playback">
                  <div className="ui center aligned raised segment">
                    <i className="file video outline orange huge icon"></i>
                    {/* <div className="ui divider"></div> */}
                    <p>PLAYBACK</p>
                  </div>
                </Link>
              </div>

              <div className="column">
                <Link to="/settings">
                  <div className="ui center aligned raised segment">
                    <i className="settings blue huge icon"></i>
                    {/* <div className="ui divider"></div> */}
                    <p>SETTINGS</p>
                  </div>
                </Link>
              </div>

              <div className="column">
                <Link to="/help">
                  <div className="ui center aligned raised segment">
                    <i className="red huge help icon"></i>
                    {/* <div className="ui divider"></div> */}
                    <p>HELP</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="six wide  column">
            <div className="ui centered fluid card">
              <div className="content">
                <div className="header">Recent Activity</div>
              </div>
              <div className="content">
                <div className="ui feed">
                  <div className="event">
                    <div className="label">
                      <img alt="ayrr" src="/avatar1.jpg" />
                    </div>
                    <div className="content">
                      <div className="date">1 day ago</div>
                      <div className="summary">
                        You added <Link to="*">Jenny Hess</Link> to your coworker
                        group.
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img alt="ayrwe" src="/avatar2.png" />
                    </div>
                    <div className="content">
                      <div className="date">3 days ago</div>
                      <div className="summary">
                        You added <Link to="*">Molly Malone</Link> as a friend.
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img alt="aywer" src="/avatar3.png" />
                    </div>
                    <div className="content">
                      <div className="date">4 days ago</div>
                      <div className="summary">
                        You added <Link to="*">Elliot Baker</Link> to your musicians
                        group.
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img alt="aywer" src="/avatar2.png" />
                    </div>
                    <div className="content">
                      <div className="date">4 days ago</div>
                      <div className="summary">
                        You added <Link to="*">Elliot Baker</Link> to your musicians
                        group.
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="label">
                      <img alt="aywer" src="/avatar1.jpg" />
                    </div>
                    <div className="content">
                      <div className="date">4 days ago</div>
                      <div className="summary">
                        You added <Link to="*">Elliot Baker</Link> to your musicians
                        group.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
