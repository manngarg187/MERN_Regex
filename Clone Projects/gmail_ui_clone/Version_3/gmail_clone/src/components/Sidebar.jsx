import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button className="compose">
        <i className="fas fa-pen"></i> Compose
      </button>

      <ul>
        <li className="active"><i className="fas fa-inbox"></i> Inbox</li>
        <li><i className="fas fa-star"></i> Starred</li>
        <li><i className="fas fa-paper-plane"></i> Sent</li>
      </ul>
    </div>
  );
}