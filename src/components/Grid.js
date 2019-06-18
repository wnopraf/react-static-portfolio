import React, { useEffect } from 'react'
import anime from 'animejs'
import PageContent from './PageContent'

export default ({ text = 'hidden text' }) => {
  useEffect(() => {
    anime({
      targets: '.grid-wall .grid-wall__cell',
      rotateY: {
        value: 90
      },
      delay: anime.stagger(450, { grid: [10, 4], from: 'center' }),
      easing: 'easeOutExpo'
    })
  })
  return (
    <div className="grid-wall">
      <div className="grid-wall__hidden-text">
        <PageContent>
          <h1>{text}</h1>
        </PageContent>
      </div>
      <div className="grid-wall__wrapper">
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
        <div className="grid-wall__cell" />
      </div>
      <style jsx>
        {`
          .grid-wall__wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(10, 1fr);
          }
          .grid-wall__cell {
            background: var(--pink-bg-color);
            border: 1px solid var(--blue-bg-color);
          }
          .grid-wall {
            position: relative;
            width: 100%;
            height: 300px;
            margin: 0 auto;
          }
          @media (min-width: 1024px) {
            .grid-wall {
              height: 600px;
            }
          }
          .grid-wall__hidden-text {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--blue-bg-color);
          }
          .grid-wall__hidden-text h1 {
            max-width: 400px;
            font-size: 1.7rem;
            text-align: center;
            line-height: 1.6;
            text-transform: capitalize;
            color: var(--pink-bg-color);
          }
          @media (min-width: 460px) {
            .grid-wall__hidden-text h1 {
              font-size: 2.4rem;
            }
          }
        `}
      </style>
    </div>
  )
}
