/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition-all cursor-pointer">
          Airbnb your home
        </div>
        <div className="py-2 px-4  border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition-all">
          <AiOutlineMenu />
          <div>
            <FaUser className="bg-gray-700 text-white w-8 h-8 rounded-full p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
