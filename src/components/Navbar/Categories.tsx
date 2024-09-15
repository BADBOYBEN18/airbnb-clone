import {
  GiBoatFishing,
  GiCampingTent,
  GiCastle,
  GiDesert,
  GiFarmer,
  GiIsland,
  GiUfo,
  GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import CategoryBox from './CategoryBox';
import { FaSkiing } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { PiBoat } from 'react-icons/pi';

const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'this property is close to the beach',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'this property has windmills',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'this property has windmills',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'this property is in the country side',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'this property has a pool',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'this property is on an island',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'this property is close to a lake',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'this property has skiing activites',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'this property is in a castle',
  },
  {
    label: 'Camping',
    icon: GiCampingTent,
    description: 'this property has camping sites',
  },
  {
    label: 'Desert',
    icon: GiDesert,
    description: 'this property is in the desert',
  },
  {
    label: 'Farm',
    icon: GiFarmer,
    description: 'this property is on a farm',
  },
  {
    label: 'OMG',
    icon: GiUfo,
    description: 'this property has UFOs ',
  },
  {
    label: 'Boats',
    icon: PiBoat,
    description: 'this property is in the desert',
  },
  {
    label: 'Desert',
    icon: GiDesert,
    description: 'this property is in the desert',
  },
  {
    label: 'Desert',
    icon: GiDesert,
    description: 'this property is in the desert',
  },
  {
    label: 'Desert',
    icon: GiDesert,
    description: 'this property is in the desert',
  },
];

const Categories = () => {
  return (
    <div className="max-w-[2054px] mx-auto xl:px-20 md:px-10 sm-px-2 px-4 flex items-center justify-between">
      <div className="pt-4  flex items-center gap-2 w-auto justify-between overflow-x-auto flex-1">
        {categories.map(({ label, icon, description }) => (
          <div key={label}>
            <CategoryBox
              key={label}
              label={label}
              description={description}
              icon={icon}
              selected={false}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 ml-4">
        <div className="hidden md:block">
          <button className="px-4 py-3 rounded-md text-black  flex items-center gap-2 border border-black ">
            <IoFilterSharp />
            <p className="text-[12px]">Filter</p>
          </button>
        </div>
        <div className="hidden md:block">
          <button className="px-7 py-3 rounded-md text-black  flex items-center gap-2 border border-black ">
            <p className="text-[12px]"> Display before taxes</p>
            <IoFilterSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
