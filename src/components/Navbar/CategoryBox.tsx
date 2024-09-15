/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconType } from 'react-icons';

interface CategoryBoxProps {
  key: string;
  icon: IconType;
  label: string;
  selected: boolean;
  description: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  description,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={` flex flex-col items-center justify-center gap-2 p-3 border-b-2  hover:text-neutral-800 transition-all cursor-pointer ${
          selected ? `border-b-neutral-800` : `border-transparent`
        } ${selected ? `text-neutral-800` : `text-neutral-500`}`}
      >
        <Icon size={20} />
        <div className="font-medium text-sm">{label}</div>
      </div>
    </div>
  );
};

export default CategoryBox;
