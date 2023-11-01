import Link from "next/link";

function Logo({ fontSize = "none", style }) {
  let letterSpacing = "-3px";
  if (fontSize === "none") {
    letterSpacing = "-1.5px";
  }
  return (
    <Link href={"/"} style={{ fontSize, letterSpacing, ...style }} id="logo">
      Quizify
    </Link>
  );
}

export default Logo;
