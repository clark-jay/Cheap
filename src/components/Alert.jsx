// Shows a success or error message from the server.
export default function Alert({ alert }) {
  if (!alert) return null;
  return <div className={`alert alert-${alert.type}`} role="alert">{alert.text}</div>;
}
