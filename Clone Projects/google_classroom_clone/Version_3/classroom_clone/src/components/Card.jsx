function Card({ title, teacher, color }) {
  return (
    <div className="card" style={{ background: color }}>
      
      <h3>{title}</h3>
      
      <p>{teacher}</p>

    </div>
  );
}

export default Card;