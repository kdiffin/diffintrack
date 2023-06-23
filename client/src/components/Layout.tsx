import React, { ComponentType, ReactNode } from "react";

import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="darkbg min-h-screen text-white ">
      <Navbar />
      <main className=" ">{children}</main>
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
