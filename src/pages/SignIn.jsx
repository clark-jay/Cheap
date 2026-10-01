import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useRequest from "../hooks/useRequest";
import { signIn } from "../api/endpoints";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const { loading, alert, run } = useRequest();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (username, password) => {
    const res = await run(() => signIn(username, password), "Signed in.");
    if (res) {
      // Expecting { token, user } from the server; fall back to the typed username.
      login(res.data.token, res.data.user || { username });
      navigate("/");
    }
  };

  return (
    <AuthForm
      title="Sign in" submitLabel="Sign in"
      onSubmit={handleSubmit} loading={loading} alert={alert}
      footer={<>New here? <Link to="/signup">Create an account</Link></>}
    />
  );
}
