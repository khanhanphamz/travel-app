import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="Logo" width={74} height={29} />
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((item: any) => (
            <Link
              key={item.key}
              href={item.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {item.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            title="Login"
            type="button"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src={"menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
