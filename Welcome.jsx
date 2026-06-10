import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="bottom-section">
        <h1 className="title">Welcome to PopX</h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
