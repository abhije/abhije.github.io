import * as React from 'react'
import { Link } from 'gatsby'
import HeartSvg from 'src/svg/heart.svg'

export default function Footer({ data }) {
  return (
    <footer className="c-site-footeer">
      <div className="c-site-footer__wrap">
        <div className="c-page__inner-m c-site-footer__get-started">
          <article>
            <h6>{data.site_get_started.subtitle}</h6>
            <h4 className="c-page__title">{data.site_get_started.title}</h4>
            <Link to={data.site_get_started.cta.url} className="o-btn">
              {data.site_get_started.cta.title}
            </Link>
          </article>
        </div>
        <div className="c-page__inner-m c-site-footer__wrap">
          <ul className="c-site-footer__menu">
            {data.site_footer_menu.map((item, index) => (
              <li key={index}>
                <Link to={item.url} activeClassName="active">{item.title}</Link>
                {item.submenu != null &&
                  (
                    <ul>{ item.submenu.map((subItem, subIndex) => (
                        <li><Link to='ghghjhj' activeClassName="active">{subItem.title}</Link></li>
                      ))}</ul>
                  )
                }
              </li>
            ))}
          </ul>
          <p className="c-site-footer__copyrt">
            &copy; 2022. Surya Packages. All rights reserved.&nbsp;&nbsp;
            <span><HeartSvg/>&nbsp;Made in India</span>
            <span class="c-site-footer__bb">
              Crafted by&nbsp;
              <a href="http://bornbasic.com" target="_blank">BornBasic</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
