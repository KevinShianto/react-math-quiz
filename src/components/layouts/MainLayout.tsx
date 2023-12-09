import React from "react";

export type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="w-screen h-screen bg-primary-content">{children}</div>;
};

export default MainLayout;
