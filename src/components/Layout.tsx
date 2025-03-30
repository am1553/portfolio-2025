import React from "react";

function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`max-md:px-6 max-2xl:px-10 lg:text-left max-w-7xl w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
