"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Loader from "../components/Loadingbar"; // Adjust path as per your project structure

function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disabledButton, setDisabledButton] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { email, password } = user;
    setDisabledButton(!(email && password));
  }, [user]);

  const onLogin = async () => {
    setLoading(true);
    try {
      await toast.promise(axios.post("/api/users/login", user), {
        loading: "Logging in...",
        success: (response) => {
          console.log("Login successful", response.data);
          return "Login successful!";
        },
        error: "Invalid email or password. Please try again.",
      });
      router.push("/profile"); // Move the redirection here
    } catch (error: any) {
      console.error("Error during login", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-900 relative">
      <Toaster position="top-center" reverseOrder={false} />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      <div className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-4xl font-bold text-center text-purple-500 bg-gray-700 py-4">
          Login
        </h1>
        <div className="p-8">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-purple-300"
          >
            Email
          </label>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-purple-500 mr-2" />
            <input
              className="w-full p-2 border rounded-md bg-gray-700 border-purple-500 text-white placeholder-purple-500"
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email 📧"
            />
          </div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-purple-300"
          >
            Password
          </label>
          <div className="flex items-center mb-4">
            <FaLock className="text-purple-500 mr-2" />
            <input
              className="w-full p-2 border rounded-md bg-gray-700 border-purple-500 text-white placeholder-purple-500"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password 🔒"
            />
          </div>
          <button
            className={`w-full p-2 rounded-md ${
              disabledButton || loading
                ? "bg-purple-400 cursor-not-allowed text-gray-500"
                : "bg-purple-700 hover:bg-purple-800 text-white"
            }`}
            onClick={onLogin}
            disabled={disabledButton || loading}
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <Link
              href="/signup"
              className="text-purple-300 hover:text-purple-500"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
