import React, { useState } from "react";
import { auth, provider, facebookProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // reuse same styles
import Logo from "../assets/Logo.png";

const Signup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();

  // Custom Toast
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      showToast("Google Signup Successful! 🎉");
      setTimeout(() => {
        if (onClose) onClose();
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error(error);
      showToast(error.message, "error");
    }
  };

  // Facebook Signup
  const handleFacebookSignup = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      showToast("Facebook Signup Successful! 🎉");
      setTimeout(() => {
        if (onClose) onClose();
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error(error);
      showToast(error.message, "error");
    }
  };

  // Email/Password Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showToast("⚠️ Passwords do not match!", "error");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showToast("Signup Successful! 🎉");
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

      {/* Toast Notification */}
      {toast && <div className={`toast ${toast.type}`}>{toast.msg}</div>}

      <div className="login-box">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>✖</button>

        {/* Header */}
        <div className="login-header">
          <img src={Logo} alt="Logo" className="login-logo" />
          <h2>Socratic Minds</h2>
        </div>

        {/* Google Signup */}
        <button className="google-btn" onClick={handleGoogleSignup}>
          Sign up with Google
        </button>

        {/* Facebook Signup */}
        <button className="facebook-btn" onClick={handleFacebookSignup}>
          Sign up with Facebook
        </button>

        <div className="divider">or</div>

        {/* Email/Password Signup */}
        <form onSubmit={handleSignup} className="login-form">
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
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* Show Password Checkbox */}
          <div className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show Password</span>
          </div>

          {/* Signup Button */}
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
