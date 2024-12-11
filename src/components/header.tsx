import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>VoxMex</h1>
      </div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>
          Inicio
        </a>
        <a href="#about" style={styles.navLink}>
          Nosotros
        </a>
        <a href="#services" style={styles.navLink}>
          Servicios
        </a>
        <a href="#contact" style={styles.navLink}>
          Contacto
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#1a73e8",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s",
    fontWeight: "bold",
  },
};

export default Header;
