import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

//------------------------------------------------------------------------------
//-- HOME BRANDS TEMPLATE --
//------------------------------------------------------------------------------

export default function HomeCtaProducts() {
  return (
    <section className="c-home-section c-home-section--product-cta">
      <div className="c-page__inner-s c-home-section__wrap">
        <article>
          <StaticImage src='../../images/boxes.png' alt='Product boxes'
            layout='constrained' placeholder='blurred'/>
          <h4 className="c-page__title">Millions of units produced every week, flawlessly.</h4>
          <Link to='/products' className='o-btn o-btn--white'>Products &amp; Services</Link>
        </article>
      </div>
    </section>
  )
}
