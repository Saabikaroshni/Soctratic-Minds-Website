import React, { useState } from "react";
import { auth, provider, facebookProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Logo from "../assets/Logo.png";

const Login = ({ onClose, onSwitchToSignup, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  // Show toast
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      showToast("Google Login Successful! 🎉");

      if (onLoginSuccess) onLoginSuccess(result.user); // <-- Notify App
      setTimeout(() => {
        if (onClose) onClose();
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error(error);
      showToast(error.message, "error");
    }
  };

  // Facebook Login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      showToast("Facebook Login Successful! 🎉");

      if (onLoginSuccess) onLoginSuccess(result.user); // <-- Notify App
      setTimeout(() => {
        if (onClose) onClose();
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error(error);
      showToast(error.message, "error");
    }
  };

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      showToast("Login Successful! 🎉");

      if (onLoginSuccess) onLoginSuccess(userCredential.user); // <-- Notify App
      setTimeout(() => {
        if (onClose) onClose();
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error(error);
      showToast(error.message, "error");
    }
  };

  return (
    <div className="login-overlay">
      {/* Stars Background */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className={`star ${i % 3 === 0 ? "small" : i % 3 === 1 ? "medium" : "large"}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        ></div>
      ))}

      {/* Toast */}
      {toast && <div className={`toast ${toast.type}`}>{toast.msg}</div>}

      <div className="login-box">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>

        {/* Header */}
        <div className="login-header">
          <img src={Logo} alt="Logo" className="login-logo" />
          <h2>Socratic Minds</h2>
        </div>

        {/* Google Login */}
        <button className="google-btn" onClick={handleGoogleLogin}>
          Login with Google
        </button>

        {/* Facebook Login */}
        <button className="facebook-btn" onClick={handleFacebookLogin}>
          Login with Facebook
        </button>

        <div className="divider">or</div>

        {/* Email/Password Login */}
        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* Switch to Signup */}
        <p className="signup-text">
          Don’t have an account?{" "}
          <button
            className="switch-btn"
            onClick={() => {
              if (onClose) onClose();
              if (onSwitchToSignup) onSwitchToSignup();
            }}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
