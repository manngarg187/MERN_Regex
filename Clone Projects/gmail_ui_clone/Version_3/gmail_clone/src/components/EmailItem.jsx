import "../styles/EmailItem.css";

export default function EmailItem({ sender, subject, time, unread }) {
  return (
    <div className={`email ${unread ? "unread" : ""}`}>
      <span className="sender">{sender}</span>
      <span className="subject">{subject}</span>
      <span className="time">{time}</span>
    </div>
  );
}