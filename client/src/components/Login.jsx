import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [staffID, setStaffID] = useState("");
  const [password, setPassword] = useState("");
  const [verifyID, setVerifyID] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const history = useHistory();

  const userCredentials = { staffID, password, verifyID, cardNumber };

  // form submission & login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      userCredentials.staffID &&
      userCredentials.password &&
      userCredentials.verifyID &&
      userCredentials.cardNumber !== ""
    ) {
      setIsConfirming(true);
      setError(null);
      setTimeout(() => {
        setIsConfirming(false);
        setSuccess("🎉  - Login Successful!!!");
        console.table(userCredentials);
      }, 1000);
      setTimeout(() => {
        history.push("/dashboard");
      }, 2000);
    } else {
      setError("Fill all empty fields");
    }
  };

  return (
    <>
    <div className="login-bg">
      {!isConfirming && !success && (
      <div className="ui card red centered">
        <div className="content">
          {error && <div className="ui negative message">⚠️ &nbsp;{error}</div>}

            <form className="ui form" onSubmit={handleLogin}>
              {/* StaffId Field */}
              <div className="field">
                <label>StaffID:</label>
                <input
                  type="text"
                  value={staffID}
                  onChange={(e) => setStaffID(e.target.value)}
                  placeholder="STF132"
                />
              </div>

              {/* Staff password */}
              <div className="field">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*************"
                />
              </div>

              {/* 2 Step Varification */}
              <div className="field">
                <div className="field">
                  <b>Two(2) Step Varification:</b>
                </div>
                <div className="equal width fields">
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        className="visible"
                        name="verifyID"
                        value={"Passport"}
                        onChange={(e) => setVerifyID(e.target.value)}
                      />
                      <label>Passport</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        className="visible"
                        name="verifyID"
                        value={"DVLA"}
                        onChange={(e) => setVerifyID(e.target.value)}
                      />
                      <label>DVLA</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        className="visible"
                        name="verifyID"
                        value={"SSNIT"}
                        onChange={(e) => setVerifyID(e.target.value)}
                      />
                      <label>SSNIT</label>
                    </div>
                  </div>
                </div>

                <div className="equal width fields">
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        className="visible"
                        name="verifyID"
                        value={"NHIS"}
                        onChange={(e) => setVerifyID(e.target.value)}
                      />
                      <label>NHIS</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        className="visible"
                        name="verifyID"
                        value={"VoterID"}
                        onChange={(e) => setVerifyID(e.target.value)}
                      />
                      <label>VoterID</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui radio checkbox">
                      <input
                        type="radio"
                        className="visible"
                        name="verifyID"
                        value={"Ghana-Card"}
                        onChange={(e) => setVerifyID(e.target.value)}
                      />
                      <label>GHCard</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* StaffId Field */}
              <div className="field">
                <label>Card Number: </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder={`${verifyID} Number`}
                />
              </div>

              <button className="ui animated fluid button youtube">
                <div className="visible content">Login</div>
                <div className="hidden content">
                  <i aria-hidden="true" className="arrow right icon"></i>
                </div>
              </button>
            </form>
          
          <Link to="/secret">
            <i className="icon sitemap"></i>
          </Link>
        </div>
      </div>
      )}
  
  {isConfirming && !error && ( <div className="ui centered medium active indeterminate inverted text loader">Please wait...</div>)}

          {success && (
            <>
              <div className="ui message success"> {success}</div>
            </>
          )}
        </div>
    </>
    );
};

export default Login;
