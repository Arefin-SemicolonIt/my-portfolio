import Image from "next/image";

const Portfolio = () => {
  return ( 
    <div className="bg-[#0f1013] p-[50px]">
      <div>
        <h2 className="text-[90px] text-[#333] text-center">Portfolio</h2>
        <p className="text-[#eb2f06] text-[30px] text-center">Our Projects</p>
      </div>

      <div className="mb-[50px]">
        <ul className="flex justify-center space-x-4">
          <li>All</li>
          <li>Design</li>
          <li>Development</li>
        </ul>

      </div>
      <div className="flex justify-between mb-[40px]">
        <div>
          <Image src="/img/portfolio1.jpg" width={356} height={356} />
        </div>
        <div>
          <Image src="/img/portfolio2.jpg" width={356} height={356} />
        </div>
        <div>
          <Image src="/img/portfolio3.jpg" width={356} height={356} />
        </div>
        </div>
        <div className="flex justify-between">
        <div>
          <Image src="/img/portfolio4.jpg" width={356} height={356} />
        </div>
        <div>
          <Image src="/img/portfolio5.jpg" width={356} height={356} />
        </div>
        <div>
          <Image src="/img/portfolio6.jpg" width={356} height={356} />
        </div>
      </div>

      <div className="text-center mt-[50px] pb-[50px]">
        <a className="border-[2px] border-[#eb2f06] rounded-full p-[10px] hover:bg-[#eb2f06] hover:text-white">More Projects</a>
      </div>

    </div>
   );
}
 
export default Portfolio;