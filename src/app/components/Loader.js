// src/app/components/Loader.tsx
import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-purple-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;