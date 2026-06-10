function Account() {
  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>Account Settings</h2>

      <div className="profile">
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="profile"
        />

        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
        Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}

export default Account;
