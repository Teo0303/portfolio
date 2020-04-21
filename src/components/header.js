import React from "react";
import PrimaryButton from "./ui-elements/primary-button";
import { Link } from "gatsby";

const links = [
  { name: "Projects", href: "/projects/" },
  { name: "Articles", href: "/articles/" },
  { name: "About me", href: "#" }
];

const NavLinks = (props) => {
  const links = props.links;
  const navLinks = links.map((link) => (
    <li class='ml-20 text-xl hover:text-primary'>
      <Link to={link.href}>{link.name}</Link>
    </li>
  ));
  return <ul className='flex'>{navLinks}</ul>;
};

export default () => (
  <header className=' bg-dark text-white  py-5'>
    <div className='container mx-auto flex items-center justify-between'>
      <div className='logo'>
        <Link to='/'>
          <strong className='text-3xl text-primary text-uppercase'>
            JONYBEKOV
          </strong>
        </Link>
      </div>
      <div className='nav'>
        <NavLinks links={links}></NavLinks>
      </div>
      <PrimaryButton>Get In Touch</PrimaryButton>
    </div>
  </header>
);
