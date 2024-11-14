import React from "react";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="h-screen w-screen  overflow-auto flex flex-col">
      {/* App Header */}
      <AppHeader />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50 flex justify-center p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
