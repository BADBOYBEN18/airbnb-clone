import { Listings } from '@/components/Listings';
import { Nav } from '@/components/Navbar/Nav';
// import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-main">
      <Nav />
      <Listings />
      {/* <ImageSlider /> */}
      <div className="py-10 gap-4 hidden lg:flex flex-col justify-center items-center">
        <p className="font-bold text-[18px]">
          Continue exploring trending homes
        </p>
        <button className="py-2 px-5 text-[16px] font-bold text-white bg-[#222222] rounded-md">
          Show More
        </button>
      </div>
      <footer>
        <div className=" bg-gray-500 px-10">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            sit ratione porro possimus! Ipsum error obcaecati odio iusto cumque.
            Maxime sint ipsa ratione incidunt commodi unde excepturi reiciendis
            impedit odio.
          </p>
        </div>
      </footer>
    </div>
  );
}
