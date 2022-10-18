import Link from "next/link";

interface INavLink {
  link: string;
  text: string;
  isActive: boolean;
}
const NavLink = ({ link, text, isActive }: INavLink) => (
  <Link href={link}>
    <a className={`${isActive ? "active" : "text-white"} nav-link`}>{text}</a>
  </Link>
);

export default NavLink;
