import React from 'react';

function TextAction({ children, ...props }: { children: React.ReactNode }) {
  return (
    <span
      className="uppercase font-hausBold underline hover:text-white hover:bg-black hover:no-underline cursor-pointer"
      {...props}
    >
      {children}
    </span>
  );
}

export default TextAction;
