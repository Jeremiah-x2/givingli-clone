import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between mt-8 px-6 fixed w-full z-[1000]">
      <div>
        <Link to={"/"}>
          <img
            src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/667463d01a10a9f3654e3f47_Logo.svg"
            alt="Logo"
            className="w-[92px]"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4 text-heart-dark">
        <Link to={"/about"}>About us</Link>
        <Link to={"/pro"}>Pro</Link>
        <Link
          to={"/create"}
          className="bg-[#333]  inline-flex overflow-hidden items-center relative justify-center w-[140px] h-10 rounded-full before:content['*'] before:w-0 before:bg-white before:bg-opacity-30 before:absolute before:top-full hover:before:top-0 before:rounded-full before:h-0 before:z-10 hover:before:w-[200px] hover:before:h-[200px] before:transition-all hover:before:rounded-none text-heart"
        >
          Start Gifting
        </Link>
      </div>
    </header>
  );
}
