import logo from "../assets/logo.png";

const Home = () => {
  const style = {
    backgroundImage:
      "url(https://media.istockphoto.com/id/1366314114/fr/vectoriel/arri%C3%A8re-plan-technologique-avec-des-points-connect%C3%A9s-sur-un-paysage-dondes-3d-science.jpg?s=612x612&w=0&k=20&c=sCCT9wS5CNo23VWyI0xAcThT6pho0jJy6lsqgD2jfjU=)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="absolute top-0 h-screen w-screen bg-[#09090B]">
      <div className="relative">
        <div className="w-full absolute top-28 h-[calc(100vh-7rem)] px-5 lg:px-24 xl:px-40 py-5 lg:py-10 text-white">
          <div className="flex justify-center w-full h-full items-center container mx-auto">
            <div className="flex justify-center items-center gap-2 text-5xl">
              <img className="w-20" src={logo} alt="logo" />
              <p>|</p>
              <p className="mt-2">Sharpe AI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
