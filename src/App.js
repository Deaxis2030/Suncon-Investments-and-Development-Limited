import React, { Component } from "react";
import { useSelector } from "react-redux";
import Header from "./compnents/Header";
import LoginPage from "./compnents/LoginPage";
import HomePage from "./compnents/HomePage";
import Footer from "./compnents/Footer";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container error-boundary">
          <h1>
            Something went wrong.
          </h1>
          <p>{this.state.error?.message || "Unknown error"}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const showLoginModal = useSelector((state) => state.showLoginModal);

  return (
    <ErrorBoundary>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />

      {showLoginModal && <LoginPage />}
    </ErrorBoundary>
  );
}

export default App;
