// Hook (use-require-auth.js)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./use-auth.js";

function useRequireAuth(redirectUrl = "/signup") {
  const auth = useAuth();
  const navigate = useNavigate();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      navigate(redirectUrl);
    }
  }, [auth, navigate, redirectUrl]);
  return auth;
}

export { useRequireAuth };
