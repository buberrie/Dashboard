import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { GoBell } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import UserProfileModal from "./UserProfileModal";
import NotificationModal from "./NotificationModal";
import { useState } from "react";

const NavBar = () => {
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openNotifiModal, setOpenNotifiModal] = useState(false);

  return (
    <nav className=" navbar sticky top-0 z-10 max-width flex justify-between items-center md:py-5 py-4 md:px-6 px-3 w-full ">
      {/* page naem */}
      <h2
        className="dark-text font-semibold md:text-[1.25rem] text-[1rem]">
        Dashboard
      </h2>

      <div className="flex items-center lg:justify-end justify-center xl:w-[65%] lg:w-[80%] w-[80%] lg:mr-4 lg:ml-0 ml-6">
        {/* search box */}
        <SearchBar size={25} className="icon-color " />

        <div className=" items-center justify-center lg:flex hidden">
          {/* calender/date */}
          <div className="flex-center">
            <LuCalendarDays className="icon-color" />
            <span className="text-[.875rem] ml-2">November 15, 2023</span>
          </div>

          {/* notification bell and component */}
          <div className=" relative">
            <div
              className="p-2 border w-fit h-fit rounded-full mx-5 cursor-pointer relative z-[2]"
              onMouseEnter={() => setOpenNotifiModal(true)}
              onMouseLeave={() => setOpenNotifiModal(false)}
              onClick={() => setOpenNotifiModal(!openNotifiModal)}>
              <GoBell size={15} className="icon-color" />
            </div>
            <div
              className={`${
                openNotifiModal
                  ? "opacity-100 top-6 pointer-events-auto"
                  : "opacity-0 -top-8 pointer-events-none"
              } absolute w-[15rem] right-0 pt-5 transition-all duration-500 z-[1]`}
              onMouseEnter={() => setOpenNotifiModal(true)}
              onMouseLeave={() => setOpenNotifiModal(false)}>
              <NotificationModal />
            </div>
          </div>
        </div>
      </div>

      {/* user profile */}
      <div className=" relative">
        <div
          onMouseEnter={() => setOpenUserModal(true)}
          onMouseLeave={() => setOpenUserModal(false)}
          onClick={() => setOpenUserModal(!openUserModal)}
          className="cursor-pointer z-[2] relative">
          <UserProfile openUserModal={openUserModal}/>
        </div>
        <div
          className={` z-[1] ${
            openUserModal
              ? "opacity-100 md:top-12 top-6 pointer-events-auto"
              : "opacity-0 -top-8 pointer-events-none"
          } transition-all duration-500 absolute w-[20rem] pt-4 right-0 modal z-[1]`}
          onMouseEnter={() => setOpenUserModal(true)}
          onMouseLeave={() => setOpenUserModal(false)}>
          <UserProfileModal />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
