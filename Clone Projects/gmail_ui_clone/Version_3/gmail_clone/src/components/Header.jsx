import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <i className="fas fa-bars"></i>
        <span className="logo">Gmail</span>
      </div>

      <div className="search-box">
        <i className="fas fa-search"></i>
        <input placeholder="Search mail" />
      </div>

      <div className="right">
        <i className="fas fa-question-circle"></i>
        <i className="fas fa-cog"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
}