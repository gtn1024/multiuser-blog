import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div className="h-[64px] flex justify-between items-center px-4 border-b border-b-solid border-b-gray-200 mb-2">
      <div>
        <Link to={'/'}>
          <img src="/vite.svg" alt="Vite Logo" className="h-8"/>
        </Link>
      </div>

      <div>
        <Button asChild>
          <Link to="/login">
            登录
          </Link>
        </Button>
      </div>
    </div>
  )
}