import logo from "../../assets/images/logo.jpeg";

const Team = () => {
  return (
    <div className="p-10 flex justify-center items-center flex-col w-full">
      <h1 className="text-[40px] font-bold text-center text-white">Our Team</h1>
      <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-10 lg:grid-cols-3 justify-between items-center mt-10 px-20">
        <div className="flex flex-col justify-center items-center">
        <img
            className="rounded-full h-40 w-40 object-cover"
            src={logo}
            alt=""
          />
          <h3 className="font-bold text-white  mt-5">John doe</h3>
          <p className="text-white">Junior Developer</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-full h-40 w-40 object-cover"
            src={logo}
            alt=""
          />
          <h3 className="font-bold text-white  mt-5">John doe</h3>
          <p className="text-white">Junior Developer</p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <img
            className="rounded-full h-40 w-40 object-cover"
            src={logo}
            alt=""
          />
          <h3 className="font-bold text-white  mt-5">John doe</h3>
          <p className="text-white">Junior Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
