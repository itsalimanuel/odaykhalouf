import Link from "next/link";
import Logo from "../shared/logo";
export default function Header() {
  return (
    <div className=" z-10 fixed w-full py-10 scroll-p-10">
      <nav className="flex container items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-xl uppercase">Oday</span>
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-gray-400 leading-[26px] hover:text-white "
          >
            Home
          </Link>
          <Link
            href="/portofolios"
            className="text-sm text-gray-400 leading-[26px] hover:text-white "
          >
            Portofolios
          </Link>

          <Link
            href="/worl"
            className="text-sm text-gray-400 leading-[26px] hover:text-white "
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-400 leading-[26px] hover:text-white "
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
