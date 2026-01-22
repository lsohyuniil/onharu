import ReactFocusLock from "react-focus-lock";

interface ModalProps {
  children: React.ReactNode;
}

const BaseClasses =
  "-translate-x-[50%] -translate-y-[50%] border border-border fixed top-[50%] left-[50%] z-32 rounded-[12px] bg-gray-50 max-w-[640px] w-full";

export const Modal = ({ children }: ModalProps) => {
  return (
    <ReactFocusLock>
      <div className="fixed inset-0 z-30 bg-black opacity-6"></div>
      <div className={BaseClasses} role="alert">
        <div className="relative px-[50px] py-[55px]">
          <button className="absolute top-7 right-6">X</button>
          <div>{children}</div>
        </div>
      </div>
    </ReactFocusLock>
  );
};
