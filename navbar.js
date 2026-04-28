import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: 20, background: "black", color: "white" }}>
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
