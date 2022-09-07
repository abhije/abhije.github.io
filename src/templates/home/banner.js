import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import ChevronSvg from 'src/svg/caret.svg'

//------------------------------------------------------------------------------
//-- HOME BANNER TEMPLATE --
//------------------------------------------------------------------------------

export default function HomeBanner({ data }) {
  return (
    <section className="c-home-section c-home-section--banner">
        <div className="c-page__inner-m c-home-section__wrap">
          <article>
            <h2>{data.title}</h2>
            <p>{data.intro}</p>
            <Link to={data.cta.url} className='o-btn'>
              {data.cta.title}
              <ChevronSvg/>
            </Link>
          </article>
          <StaticImage src="../../images/factory.png" alt='Factory'
            placeholder='tracedSVG' layout='fullWidth'/>
        </div>
      </section>
  )
}
