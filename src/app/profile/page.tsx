"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Loader from "../components/Loader"; // Adjust path as per your project structure
import Navbar from "../components/Navbar"; // Ensure the correct import path
import Footer from "../components/Footer"; // Ensure the correct import path

function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const onLogout = async () => {
    setIsLoading(true);
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successful 😉");
      console.log("Logging out...");
      router.push("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
      toast.error("Failed to logout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get("/api/users/me");
      setUserData(response.data.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      toast.error("Failed to fetch user data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = () => {
    if (userData && userData.username) {
      const encodedUsername = userData.username.replace(/\s+/g, "");
      router.push(`/profile/${encodedUsername}`);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 py-2">
        <h1 className="text-4xl mb-4">Profile Page</h1>
        <button
          onClick={onLogout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Logout
        </button>
        {userData ? (
          <div
            onClick={handleCardClick}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl mb-4 text-center">User Profile</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                User ID:
              </label>
              <p className="text-gray-700">{userData._id}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <p className="text-gray-700">{userData.username}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <p className="text-gray-700">{userData.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Admin:
              </label>
              <p className="text-gray-700">{userData.isAdmin ? "Yes" : "No"}</p>
            </div>
          </div>
        ) : (
          <p>No user data available.</p>
        )}
        <Toaster />
      </main>
      <Footer />
    </div>
  );
}
export default ProfilePage;
