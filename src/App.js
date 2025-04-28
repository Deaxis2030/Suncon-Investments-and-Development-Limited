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
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-red-600">
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
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <ErrorBoundary>
      <Header />
      <main className="flex-grow pt-20 pb-16">
        {isLoggedIn ? <HomePage /> : <LoginPage />}
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
