import * as React from 'react'
import HornSvg from 'src/svg/horn.svg'
import BulbSvg from 'src/svg/bulb.svg'
import RocketSvg from 'src/svg/rocket.svg'

//------------------------------------------------------------------------------
//-- HOME BRANDS TEMPLATE --
//------------------------------------------------------------------------------

export default function HomeMottoVisionMission({ data }) {
  const icons = {
    horn: <HornSvg/>,
    bulb: <BulbSvg/>,
    rocket: <RocketSvg/>
  }

  return (
    <section className="c-home-section c-home-section--mvm">
    <div className="c-home-section__wrap">
      <h5 className='c-page__title'>{data.title}</h5>
      <div className="c-home-section__boxes">
        {data.boxes.map((box, index) => (
          <div key={'box-' + index} className="c-home-section__box">
              <article>
                {icons[box.icon]}
                <h4 className="c-page__title">{box.title}</h4>
                <p>{box.content}</p>
              </article>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
