import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1E1E2F",
        padding: "0.8rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src="/logo.png" alt="IMR Logo" width={40} height={40} />
        <h1 style={{ color: "#fff", fontSize: "1.5rem", marginLeft: "10px" }}>
          IMR Movie Portal
        </h1>
      </div>
      <div>
        <Link href="/" style={navLinkStyle}>
          Home
        </Link>
        <Link href="/movies" style={navLinkStyle}>
          Movies
        </Link>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginLeft: "20px",
  fontSize: "1.1rem",
  padding: "6px 10px",
  borderRadius: "5px",
  transition: "background 0.3s ease",
};
