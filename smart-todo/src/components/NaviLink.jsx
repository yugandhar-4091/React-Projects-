import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({ to, className = "", activeClassName = "", children }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${className} ${activeClassName}` : className
      }
    >
      {children}
    </RouterNavLink>
  );
}
