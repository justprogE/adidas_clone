import React from 'react';

function Layout({
  children,
  ...props
}: {
  children: React.ReactNode;
  headerSlot: React.ReactNode;
  footerSlot?: React.ReactNode;
}) {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden flex-auto flex flex-col">
      {props.headerSlot}
      {children}
      {props.footerSlot}
    </div>
  );
}

export default Layout;
