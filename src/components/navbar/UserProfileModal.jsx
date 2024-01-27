import { GoBell } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import userPic from "./assets/profile-img.jpeg";
import { useState } from "react";
import NotificationModal from "./NotificationModal";

const UserProfileModal = (props) => {
  const handleCloseModal = (e) => {
    // Close the modal only if the click is on the overlay (outside the modal content)
    if (e.target.classList.contains("modal")) {
      props.onClose();
    }
    console.log(e.target);
  };

  const navLists = [
    {
      icon: <GoBell/>,
      text: "Notification(0)",
    },
    {
      icon: <CiSettings />,
      text: "Settings",
    },
    {
      icon: <LiaSignOutAltSolid />,
      text: "Logout",
    },
  ];

  const [openNotifiModal, setOpenNotifiModal] = useState(false)

  const handleOpenNotifiModal = () => {
      setOpenNotifiModal(true)
      console.log("opened")
  }

  return (
    <div
      className={`fixed ${props.openModal ? "opacity-100 top-0" : "opacity-0 -top-[30rem] pointer-events-none"} transition-all duration-300 xxl:right-[25%] md:right-10 right-4 flex justify-end items-start w-full lg:w-[30rem] md:w-[55%] h-full xxl:h-[40%] md:h-[65%] modal bg-transparent`}
      onMouseLeave={handleCloseModal}
      onClick={handleCloseModal}>
      <nav className="box dark-text flex items-center flex-col relative right-5 md:top-20 top-16 p-6 rounded-lg bg-bg_white w-[20rem] max-w-[80%]">
        <div className="flex items-center w-full pb-2">
          <img
            src={userPic}
            alt="user profile picture"
            className="w-20 h-20 rounded-full object-cover lg:mr-3 mr-1"
          />
          <div className=" items-center ml-4 flex-col flex ">
            <span className="text-[1.2rem]">Justin Bergson</span>
            <span className="text-[.875rem] ">Justin@gmail.com</span>
          </div>
        </div>
        <div className="w-full border-b items-center py-4 lg:hidden flex ">
          <LuCalendarDays className="icon-color" />
          <span className="text-[1rem] ml-2">November 15, 2023</span>
        </div>
        <div className="w-full flex flex-col lg:border-t lg:mt-6">
          {navLists.map((list, index) => (
            <p key={index} className={` items-center mt-4 cursor-pointer hover:scale-105 transition-all ${index === 0 ? "lg:hidden flex" : "flex"}`} onMouseEnter={index === 0 ?  handleOpenNotifiModal : null}  onClick={index === 0 ?  handleOpenNotifiModal : null}>
              <span className="mr-2">{list.icon}</span>
              {list.text}
            </p>
          ))}
        </div>
        <NotificationModal onClose={() => setOpenNotifiModal(false)} openModal={openNotifiModal} />
      </nav>
    </div>
  );
};

export default UserProfileModal;
