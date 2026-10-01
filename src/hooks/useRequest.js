import { useState } from "react";
import { getErrorMessage } from "../api/endpoints";

// Wraps any Axios call: tracks loading and turns the server response into a success/error alert.
export default function useRequest() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); // { type: "success" | "error", text }

  const run = async (apiCall, fallbackMessage = "Done!") => {
    setLoading(true);
    setAlert(null);
    try {
      const res = await apiCall();
      setAlert({ type: "success", text: res.data?.message || fallbackMessage });
      return res;
    } catch (err) {
      setAlert({ type: "error", text: getErrorMessage(err) });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, alert, run };
}
