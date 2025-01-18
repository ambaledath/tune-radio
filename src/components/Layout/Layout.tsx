import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
