import React from 'react'
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-full overflow-auto gap-x-8 ">
      <Outlet />
    </div>
  );
}
