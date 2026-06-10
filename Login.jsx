import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">
        Signin to your <br /> PopX account
      </h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button className="login-btn" onClick={() => navigate("/account")}>
        Login
      </button>
    </div>
  );
}

export default Login;
