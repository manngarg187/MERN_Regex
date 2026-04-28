import EmailItem from "./EmailItem";

export default function EmailList() {
  const emails = [
    { sender: "Amazon", subject: "Your order shipped", time: "10:30 AM", unread: true },
    { sender: "LinkedIn", subject: "New jobs", time: "9:15 AM", unread: true },
    { sender: "GitHub", subject: "PR assigned", time: "Yesterday", unread: false }
  ];

  return (
    <div>
      {emails.map((e, i) => (
        <EmailItem key={i} {...e} />
      ))}
    </div>
  );
}