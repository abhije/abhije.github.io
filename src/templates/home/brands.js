import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//------------------------------------------------------------------------------
//-- HOME BRANDS TEMPLATE --
//------------------------------------------------------------------------------

export default function HomeBrands({ data, imageSharps }) {
  return (
    <section className="c-home-section c-home-section--brand">
      <div className="c-page__inner-m c-home-section__wrap">
        <h5 className="c-page__title">{data.title}</h5>
        <ul className="c-home-section__brand-list">
          {data.items.map(function(item, index) {
            let image = undefined
            imageSharps.map(function(img, x) {
              if(img.base === item.image) {
                image = getImage(img)
              }
              return null;
            })

            if (image !== undefined) {
              return (
                <li key={'item' + index}>
                  <GatsbyImage image={image} alt={item.name} width="149" height="96" />
                </li>
              )
            }

            return;
          })}
        </ul>
      </div>
    </section>
  )
}
