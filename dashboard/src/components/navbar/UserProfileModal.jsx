/* eslint-disable react/prop-types */
import { LuCalendarDays } from "react-icons/lu";
import userPic from "./assets/profile-img.jpeg";
import { useState } from "react";
import NotificationModal from "./NotificationModal";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { GoBell } from "react-icons/go";

const UserProfileModal = () => {

  const [openNotifiModal, setOpenNotifiModal] = useState(false)

  const handleOpenNotifiModal = () => {
      setOpenNotifiModal(true)
      console.log("opened")
  }

  const handleOverlayClick = (e) => {
    // Close the modal only if the click is on the overlay (outside the modal content)
    if (e.target.classList.contains("modal-overlay")) {
      setOpenNotifiModal(false)
    }
  };

  const navLists = [
    {
      icon: <GoBell/>,
      text: "Notification(0)",
    },
    {
      icon: <CiSettings/>,
      text: "Settings",
    },
    {
      icon: <LiaSignOutAltSolid/>,
      text: "Logout",
    },
  ];

  return (
      <div className="box dark-text flex items-center flex-col relative p-6 rounded-lg bg-bg_white w-full">
        <div className="flex items-center w-full pb-2">
          <img
            src={userPic}
            alt="user profile picture"
            className="md:w-20 md:h-20 w-16 h-16 rounded-full object-cover lg:mr-3 mr-1"
          />
          <div className=" items-center ml-4 flex-col flex ">
            <span className="md:text-[1.2rem] text-base">Justin Bergson</span>
            <span className="md:text-sm text-xs">Justin@gmail.com</span>
          </div>
        </div>

        <div className="w-full border-b items-center py-4 lg:hidden flex ">
          <LuCalendarDays className="icon-color" />
          <span className="md:text-base text-sm ml-2">November 15, 2023</span>
        </div>

        <div className="w-full flex flex-col lg:border-t lg:mt-6">
          {navLists.map((list, index) => (
            <p key={index} className={` items-center mt-4 cursor-pointer hover:scale-105 transition-all ${index === 0 ? "lg:hidden flex" : "flex"}`} onClick={() => {
              if (index === 0) {
                handleOpenNotifiModal();
              } else if (index === 2) {
                window.location.reload();
              }
            }}>
              <span className="mr-2">{list.icon}</span>
              {list.text}
            </p>
          ))}
        </div>

        <div className={` ${openNotifiModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20 modal-overlay`} onClick={handleOverlayClick}>
          <div className="w-[70%]">
          <NotificationModal/>
          </div>
        </div>
      </div>
  );
};

export default UserProfileModal;
