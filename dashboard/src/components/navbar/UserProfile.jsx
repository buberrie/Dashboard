import userPic from "./assets/profile-img.jpeg"
import { IoIosArrowDown } from "react-icons/io";

const UserProfile = ({openUserModal}) => {
  return (
    <div className="border lg:w-[14rem] md:w-[6rem] w-[3.5rem] items-center flex justify-between  rounded-full md:px-2 px-1 lg:py-1 py-1 md:py-2 cursor-pointer">
        <img src={userPic} alt="user profile picture" className="md:w-10 md:h-10 w-7 h-7 rounded-full object-cover lg:mr-3 mr-1"/>
        <div className=" items-center justify-center flex-col mr-2 lg:flex hidden">
            <span className="text-[1rem]">Justin Bergson</span>
            <span className="text-[.875rem] ">Justin@gmail.com</span>
        </div>
        <IoIosArrowDown size={16} className={` ${openUserModal ? " rotate-180 " : " rotate-0 "} transition-all duration-300 md:w-[2rem] w-[0.875rem] icon-color`}/>
    </div>
  )
}

export default UserProfile