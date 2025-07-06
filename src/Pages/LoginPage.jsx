import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axiosInstance.post("https://dummyjson.com/auth/login");
      setMessage(`✅ Login successful! Token: ${response.data.token}`);
    } catch (error) {
      setMessage("❌ Login failed. Please check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            value="emilys"
            disabled
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value="emilyspass"
            disabled
            style={styles.input}
          />
        </div>

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
  },
  form: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.5rem",
    color: "#1e293b",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "0.875rem",
    marginBottom: "0.25rem",
    color: "#475569",
  },
  input: {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#f8fafc",
  },
  button: {
    padding: "0.75rem",
    borderRadius: "4px",
    backgroundColor: "#3b82f6",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  message: {
    textAlign: "center",
    fontSize: "0.9rem",
    marginTop: "1rem",
    color: "#0f172a",
  },
};
