import { useLocation } from "react-router-dom";

// Re-mounts on every route change (key = pathname) so the CSS fade plays each time.
export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  return <main key={pathname} className="page">{children}</main>;
}
