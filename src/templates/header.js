import * as React from "react";
import { Link } from "gatsby";
import SiteLogo from "src/svg/logo.svg";
import FbSvg from "src/svg/fb.svg";
import TwSvg from "src/svg/tw.svg";
import LnSvg from "src/svg/ln.svg";

//------------------------------------------------------------------------------
//-- HEADER TEMPLATE --
//------------------------------------------------------------------------------

export default function Header({ data }) {
  const icons = {
    fb: <FbSvg />,
    tw: <TwSvg />,
    ln: <LnSvg />,
  };

  return (
    <header className="c-site-header">
      <h1 className="c-site-header__logo">
        <Link to="/">
          <SiteLogo />
        </Link>
      </h1>
      <nav className="c-site-header__hamburger c-site-header__menus">
        <input className="c-hamburger__input" type="checkbox" />
        <div className="c-hamburger__lines">
          <span className="c-hamburger__line c-hamburger__line--1"></span>
          <span className="c-hamburger__line c-hamburger__line--2"></span>
          <span className="c-hamburger__line c-hamburger__line--3"></span>
        </div>
        <div className="c-hamburger__menus c-site-header__menus-wrap">
          <ul className="c-site-header__menu c-site-header__menu--social">
            {data.site_social_menu.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {icons[item.icon]}
                </a>
              </li>
            ))}
          </ul>
          <ul className="c-site-header__menu c-site-header__menu--secondary">
            {data.site_secondary_menu.map((item, index) => (
              <li key={index}>
                <Link activeClassName="active" to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="c-site-header__menu c-site-header__menu--primary">
            {data.site_primary_menu.map((item, index) => (
              <li key={index}>
                <Link activeClassName="active" to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="c-hamburger__overlay"></div>
      </nav>
    </header>
  );
}
