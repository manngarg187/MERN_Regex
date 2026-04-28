import profile from "../assets/download.jpeg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="left-nav">
        <span className="menu">&#9776;</span>
        <h2>Classroom</h2>
      </div>

      <div className="right-nav">
        <span>+</span>
        <img src={profile} alt="profile" />
      </div>
    </header>
  );
}

export default Navbar;