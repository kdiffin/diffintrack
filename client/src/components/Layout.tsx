import React, { ComponentType, ReactNode } from "react";

import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="darkbg flex h-screen flex-col  text-white ">
      <Navbar />
      <div className="flex flex-1 px-5 md:px-10">
        <Sidebar />
        {/* make the child component (page) full height of the screen */}
        <main className="flex-1 [&>div]:flex-1 [&>div]:pt-5">{children}</main>
      </div>
    </div>
  );
}

// HOC for layout
interface WithLayoutProps {
  children: ReactNode;
}

const withLayout = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithLayout: React.FC<P & WithLayoutProps> = (props) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );

  return WithLayout;
};

export default withLayout;
