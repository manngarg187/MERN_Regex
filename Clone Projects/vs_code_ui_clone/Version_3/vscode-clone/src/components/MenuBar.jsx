import "../styles/MenuBar.css";

export default function MenuBar() {
  const items = ["File","Edit","Selection","View","Go","Run","Help"];

  return (
    <div className="menu-bar">
      {items.map(item => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}