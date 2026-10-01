import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useRequest from "../hooks/useRequest";
import { signUp } from "../api/endpoints";

export default function SignUp() {
  const { loading, alert, run } = useRequest();
  const navigate = useNavigate();

  const handleSubmit = async (username, password) => {
    const res = await run(() => signUp(username, password), "Account created!");
    if (res) setTimeout(() => navigate("/signin"), 1200); // let the user read the message
  };

  return (
    <AuthForm
      title="Create your account" submitLabel="Create account"
      onSubmit={handleSubmit} loading={loading} alert={alert}
      footer={<>Already have an account? <Link to="/signin">Sign in</Link></>}
    />
  );
}
