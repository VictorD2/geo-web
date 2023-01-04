import React from "react";

const SplashLayout = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="w-full h-full app-row justify-center items-center p-6 bg-primary">
        <div className="relative rounded-full bg-primary animate-spin h-56 w-56 border-8 border-b-secondary border-t-secondary border-l-primary border-r-primary" />
        <div className="absolute">
        </div>
      </div>
    </div>
  );
};

export default SplashLayout;
