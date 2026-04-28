import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">Amazon</div>
        <div className="location">Deliver to India</div>
      </div>

      <div className="search">
        <input placeholder="Search Amazon" />
        <button>🔍</button>
      </div>

      <div className="nav-right">
        <div>Sign In</div>
        <div>Orders</div>
        <div className="cart">🛒 Cart</div>
      </div>
    </div>
  );
}