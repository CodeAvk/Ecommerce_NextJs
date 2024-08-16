"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [disabledButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const { email, password, username } = user;
    setDisabledButton(!(email && password && username));
  }, [user]);

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      toast.success(response.data.message);
      router.push("/login");
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data.error || "Error during signup. Please try again.";
        toast.error(errorMessage);
      } else {
        toast.error("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-gray-900">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-4xl font-bold text-center text-purple-500 bg-gray-700 py-4">
          Sign Up
        </h1>
        <div className="p-8">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-purple-300"
          >
            Username
          </label>
          <div className="flex items-center mb-4">
            <FaUser className="text-purple-500 mr-2" />
            <input
              className="w-full p-2 border rounded-md bg-gray-700 border-purple-500 text-white placeholder-purple-500"
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Username 👤"
            />
          </div>
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
              disabledButton
                ? "bg-purple-400 cursor-not-allowed text-gray-500"
                : "bg-purple-700 hover:bg-purple-800 text-white"
            }`}
            onClick={onSignup}
            disabled={disabledButton}
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <Link
              href="/login"
              className="text-purple-300 hover:text-purple-500"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
