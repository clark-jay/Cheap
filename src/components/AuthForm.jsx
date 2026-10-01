import { useState } from "react";
import Alert from "./Alert";

// Reusable username/password form used by both Sign Up and Sign In.
export default function AuthForm({ title, submitLabel, onSubmit, loading, alert, footer }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username.trim(), password);
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <Alert alert={alert} />
      <label>Username
        <input value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" />
      </label>
      <label>Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={4} autoComplete="current-password" />
      </label>
      <button className="btn" disabled={loading}>{loading ? "Please wait…" : submitLabel}</button>
      <p className="muted">{footer}</p>
    </form>
  );
}
