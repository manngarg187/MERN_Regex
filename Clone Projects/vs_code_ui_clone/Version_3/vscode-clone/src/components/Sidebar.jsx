import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>EXPLORER</h3>

      <div className="folder">
        <div className="folder-title">📂 project</div>

        <ul>
          <li>📄 index.html</li>
          <li>📄 style.css</li>
          <li>📄 script.js</li>

          <li className="folder-title">📂 assets</li>
          <ul className="nested">
            <li>📄 logo.png</li>
            <li>📄 bg.jpg</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}