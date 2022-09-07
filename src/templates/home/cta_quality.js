import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

//------------------------------------------------------------------------------
//-- HOME BRANDS TEMPLATE --
//------------------------------------------------------------------------------

export default function HomeCtaQuality({ data }) {
  return (
    <section className="c-home-section c-home-section--quality-cta">
      <article>
        <h4 className="c-page__title">{data.title}</h4>
        <Link to={data.cta.url} className="o-btn o-btn--alt">{data.cta.title}</Link>
      </article>
    <div className="c-page__inner-s c-home-section__wrap">
      <div className="c-home-section__qlty">
        <div className="c-home-section__qlty-item c-home-section__qlty-item--post">
          <article>
            <h4 className="c-page__title">{data.title}</h4>
            <Link to={data.cta.url} className="o-btn o-btn--alt">{data.cta.title}</Link>
          </article>
        </div>
        <div className="c-home-section__qlty-item c-home-section__qlty-item--img">
          <StaticImage src='../../images/factory_man.jpg' alt='Factory Man'
            layout='fullWidth' placeholder='blurred'/>
        </div>
      </div>
    </div>
  </section>
  )
}
