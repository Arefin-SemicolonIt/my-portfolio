const Contact = () => {
  return (
    <div className=" bg-[#0f1013] p-[100px]">
      <div>
        <h2 className="text-[90px] text-[#333] text-center">Contact</h2>
        <p className="text-[#eb2f06] text-[30px] text-center">Send Message</p>
      </div>
      <div className="m-[50px] flex">
        <div className="basis-1/2">
          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Location</h5>
            <address>205 Fairview St. Rochester, NY 14606</address>
          </div>

          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Email</h5>
            <a>arefin.semicolonit@gmail.com</a>
          </div>

          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Phone</h5>
            <a>+2 651 976 468</a>
          </div>
          <div>
            <h5 className="text-[20px] text-[#eb2f06]">Social Links</h5>
            <div>
              <a>facebook</a>
              <a>twitter</a>
              <a>instagram</a>
              <a>linkedin</a>
            </div>
          </div>
        </div>

        <div className="basis-1/2">
          <form className="flex flex-col">
            <input placeholder="Name" className="bg-[#222] w-[100%] h-[45px] p-[8px] border-[3px] border-[#0f1013]"/>
            <input placeholder="Email" className="bg-[#222] w-[100%] h-[45px] p-[8px] border-[3px] border-[#0f1013]"/>
            <input placeholder="Message" className="bg-[#222] w-[100%] h-[85px] p-[8px] border-[3px] border-[#0f1013]"/>
            <button className="mt-[10px] border-[2px] border-[#eb2f06] rounded-full p-[10px] hover:bg-[#eb2f06] w-[30%] hover:text-white ">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
