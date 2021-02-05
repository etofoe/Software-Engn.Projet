import { useState } from "react";
import {useHistory} from "react-router-dom";


const Secret = () => {
    const history = useHistory()
    const secret = "12345";
    const [secretCode, setSecretCode] = useState("");
    const [error, setError] = useState(null);
    const [isConfirming, setIsConfirming] = useState(false);


    const handleSecretCode = (e) => {
        e.preventDefault();
        if (secretCode === secret) {
          setError(null);
          setIsConfirming(true);
          setTimeout(()=>{
            history.push('/admin_login')
          },1000)
        } else {
          setError("Wrong Code! Try again!");
          setSecretCode("");
        }
      };

    return ( 
        <>
        <section className="secret">
            {!isConfirming && 
            <form className="ui form" onSubmit={handleSecretCode}>
                {error && <div className="ui negative message">❌ &nbsp;{error}</div>}
                <div className="code">
                    <code>Admin Secret</code>
                </div>

              <div className="field">
                <input
                  autoFocus="autofocus"
                  placeholder="enter secret code"
                  type="password"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                />
              </div>
            </form>
            }
        {isConfirming && !error && ( <div className="ui centered medium active indeterminate inverted text loader">Please wait...</div>)}
        </section>
        </>
     );
}
 
export default Secret;