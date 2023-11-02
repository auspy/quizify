import Link from "next/link";
import Logo from "./Logo";
import ButtonLogout from "./buttons/ButtonLogout";
const navi = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];
const Header = () => {
  return (
    <div
      className="pi30 w-full "
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="w-full h-[70px] flex justify-between items-center">
        <Logo />
        {navi.map((item, i) => (
          <Link
            style={{ fontSize: 14, fontWeight: 400 }}
            key={i}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
        <ButtonLogout />
      </div>
    </div>
  );
};

export default Header;
