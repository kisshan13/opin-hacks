import React from "react";

interface DashboardLayoutProps {
  title: string;
  children: React.ReactNode;
}

function DashboardLayout({ title, children }: DashboardLayoutProps) {
  return (
    <div className=" text-dark-v-1 dark:text-light-v-1">
      <div>
        <h1 className=" text-2xl font-medium dark:text-white">{title}</h1>
      </div>

      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
