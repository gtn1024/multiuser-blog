import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "@/components/Header.tsx";

export const DefaultLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-[1200px]">
        <Outlet/>
      </div>
    </div>
  )
}

