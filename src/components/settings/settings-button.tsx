import { useState } from "react";
import { SettingsIcon } from "../icons/settings";
import { SettingModal } from "./modal";

export const SettingsButton = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const showModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="bg-transparent cursor-pointer grid place-items-center"
      >
        <SettingsIcon />
      </button>
      {displayModal && <SettingModal closeModal={closeModal} />}
    </>
  );
};
