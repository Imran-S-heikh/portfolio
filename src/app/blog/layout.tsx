import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="m-4 flex-1">{children}</div>;
}

export default Layout;
