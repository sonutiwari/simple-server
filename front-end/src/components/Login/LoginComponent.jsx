import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginComponent.css";
export default function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      // Do something here to redirect user to landing page.
      history.push("/home");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor={email}>Email: </label>
              </td>
              <td>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor={password}>Password: </label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="Login" id="btn-submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
