import { perHero } from "../../../assets";

const Hero = () => {
  return <div>
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#ecb884] place-content-center pl-40 pr-40">

        <div className="mx-auto w-fit flex flex-col items-start gap-y-5">
          <div className="flex flex-col">
            <span className="text-3xl font-thin">Best Design of</span>
            <span className="text-4xl font-bold">Furniture Collection</span>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis sed similique unde facilis, laborum consectetur enim temporibus corrupti.</p>

          <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg uppercase text-blue-800">Discover</button>
        </div>

      </div>


      <div className="w-1/2 h-full">
        <img src={perHero} alt="her-bg" className="object-covers h-full" />
      </div>
    </div>
  </div>;
};

export default Hero