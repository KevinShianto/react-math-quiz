import React from "react";

export type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({
  children
}: MainLayoutProps) => {
  return (<>
    {children}
  </>)
}

export default MainLayout;