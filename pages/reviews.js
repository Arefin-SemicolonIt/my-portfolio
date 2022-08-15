import Image from "next/image";
const Reviews = () => {
  return (
    <div className=" bg-[#1b1c1f] p-[100px]">
      <h2 className="text-[90px] text-[#333] text-center">Reviews</h2>
      <p className="text-[#eb2f06] text-[30px] text-center">Clients Feedback</p>

      <div className="grid grid-cols-2 items-center justify-items-center mt-[40px]">
        <div>
          <Image src="/img/client1.jpg" height={257} width={257}/>
        </div>
        <div className="space-y-4">
          <h4 className="text-[30px]">Hunter Rad</h4>
          <q className="text-[#aaa]">
            Li Europan lingues es membres del sam familie. Lor separat existentie
            es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
            vocabular. Li lingues differe solmen in
          </q>
          <div>
            <span className="text-[#eb2f06]">Project Type:</span>
            <a className="text-[#aaa]">Website design</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
