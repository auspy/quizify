import Logo from "./Logo";
import ButtonLogout from "./buttons/ButtonLogout";

const Header = () => {
  return (
    <div
      class="pi30 w-full "
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="w-full h-[70px] flex justify-between items-center">
        <Logo />
        <ButtonLogout />
      </div>
    </div>
  );
};

export default Header;
