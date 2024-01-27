import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { GoBell } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import UserProfileModal from "./UserProfileModal";
import NotificationModal from "./NotificationModal";
import { useState } from "react";

const NavBar = () => {

  const [openUserModal, setOpenUserModal] = useState(false)
  const [openNotifiModal, setOpenNotifiModal] = useState(false)

  const handleOpenUserModal = () => {
      setOpenUserModal(true)
      console.log("opened")
  }

  const handleOpenNotifiModal = () => {
      setOpenNotifiModal(true)
      console.log("opened")
  }

  return (
    <div className="navbar sticky top-0 z-10">
      <nav className=" max-width flex justify-between items-center md:py-5 py-4 md:px-6 px-4 w-full ">
        <h1 className="dark-text font-semibold md:text-[1.25rem] t-[1.15rem]">
          Dashboard
        </h1>
        <div className="flex items-center lg:justify-end justify-center xl:w-[65%] lg:w-[80%] w-[50%] lg:mr-4 lg:ml-0 ml-6">
          <SearchBar size={25} className="icon-color " />
          <div className=" items-center justify-center lg:flex hidden">
            <LuCalendarDays className="icon-color"/>
            <span className="text-[.875rem] ml-2">November 15, 2023</span>
            <div className="p-2 border rounded-full mx-5" onMouseEnter={handleOpenNotifiModal}>
              <GoBell size={15} className="icon-color" />
            </div>
          </div>
        </div>
        <div onMouseEnter={handleOpenUserModal} onClick={handleOpenUserModal} className="cursor-pointer">
        <UserProfile />
        </div>
        <NotificationModal onClose={() => setOpenNotifiModal(false)} openModal={openNotifiModal} />
        <UserProfileModal onClose={() => setOpenUserModal(false)} openModal={openUserModal}/>
      </nav>
    </div>
  );
};

export default NavBar;
