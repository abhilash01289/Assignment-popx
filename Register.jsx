import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">
        Create your <br /> PopX account
      </h1>

      <div className="input-group">
        <label>Full Name*</label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Phone number*</label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Email address*</label>
        <input type="email" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Password *</label>
        <input type="password" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Company name</label>
        <input type="text" placeholder="Marry Doe" />
      </div>

      <p style={{ marginBottom: "10px" }}>Are you an Agency?*</p>

      <div className="radio-group">
        <label>
          <input type="radio" name="agency" /> Yes
        </label>

        <label>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <div className="bottom-section">
        <button
          className="btn-primary"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;