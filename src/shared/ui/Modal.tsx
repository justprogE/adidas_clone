import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type TState<T> = Dispatch<SetStateAction<T>>;

function Modal({
  setOpen,
  children,
}: {
  setOpen?: TState<boolean>;
  children?: React.ReactNode;
}) {
  const modal = useRef<HTMLDivElement | null>(null);

  const mouseDown = (e: MouseEvent) => {
    if (modal?.current === e.target) {
      if (setOpen) {
        setOpen(false);
      }
    }
  };
  const keyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (setOpen) {
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', keyUp);
    document.addEventListener('mousedown', mouseDown);
    return () => {
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('keyup', keyUp);
    };
  });
  return (
    <div
      ref={modal}
      className="fixed top-0 left-0 w-screen h-screen bg-opacity-75 bg-black z-[100] flex"
    >
      {children}
    </div>
  );
}

export default Modal;
