import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="lg:m-4  flex-1">{children}</div>;
}

export default Layout;
