import { createPortal } from "react-dom";
import { IconClose } from "../icons/close";
import { PomodoroButton } from "../button";

interface IProps {
  closeModal: () => void;
}

export const SettingModal: React.FC<IProps> = ({ closeModal }) => {
  return (
    <>
      {createPortal(
        <div className="fixed bg-black/30 backdrop-blur-sm inset-0 m-auto grid place-items-center px-6">
          <div className="bg-white max-w-[540px] w-full rounded-2xl relative animate-showUp ">
            <div className="flex justify-between border-b border-border-gray p-6">
              <h1 className="font-bold text-xl sm:text-large">Settings</h1>
              <button onClick={closeModal}>
                <IconClose />
              </button>
            </div>
            <form className="flex flex-col p-6 sm:px-10 sm:py-8">
              <div className="flex flex-col gap-5 items-center sm:items-start">
                <h2 className="font-bold text-tiny sm:text-small tracking-[4.23px] text-dark-gray">
                  TIME (MINUTES)
                </h2>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-border-gray my-4"></div>
              <div className="flex flex-col gap-5 items-center sm:flex-row sm:justify-between ">
                <h2 className="font-bold text-tiny sm:text-small tracking-[4.23px] text-dark-gray">
                  FONT
                </h2>
                <div className="flex gap-4">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-border-gray my-4"></div>
              <div className="flex flex-col gap-5 items-center pb-14 sm:flex-row sm:justify-between ">
                <h2 className="font-bold text-tiny sm:text-small tracking-[4.23px] text-dark-gray">
                  COLOR
                </h2>
                <div className="flex gap-4">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
              <div className="flex justify-center items-center absolute -bottom-6 left-0 right-0">
                <PomodoroButton
                  type={"submit"}
                  onClick={() => {}}
                  className="bg-red"
                >
                  Apply
                </PomodoroButton>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
