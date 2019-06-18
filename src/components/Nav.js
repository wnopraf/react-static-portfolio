import React, { useState, useRef, useEffect } from 'react'
import anime from 'animejs'
import PageContent from './PageContent'

export default () => {
  let menuHeight
  let open = false
  let menuVisible = false
  console.log('component')
  const onMenuResize = () => {
    console.log('resize', menuHeight)
    if (window.innerWidth > 768) {
      navWrapper.current.style.height = 'auto'
      menuHeight = 'auto'
      navWrapper.current.style.visibility = 'visible'
    } else if (window.innerWidth < 768) {
      if (menuHeight == undefined || menuHeight == 'auto') {
        menuHeight = parseInt(
          window.getComputedStyle(navWrapper.current).height,
          10
        )
        navWrapper.current.style.height = 0 + 'px'
      } else {
        navWrapper.current.style.height = 0 + 'px'
        open = false
      }
    }
  }
  useEffect(() => {
    window.addEventListener('resize', onMenuResize)

    if (window.innerWidth > 768) {
      navWrapper.current.style.height = 'auto'
      navWrapper.current.style.visibility = 'visible'
    } else {
      menuHeight = parseInt(
        window.getComputedStyle(navWrapper.current).height,
        10
      )
      console.log('height from - query', menuHeight)
      navWrapper.current.style.height = '0px'
      navWrapper.current.style.visibility = 'visible'
    }

    return () => {
      window.removeEventListener('resize', onMenuResize)
    }

    console.log('didMount')
  })

  const swithcMenu = () => {
    open = !open
    if (open) {
      anime({
        targets: navWrapper.current,
        height: menuHeight,
        easing: 'easeOutQuad'
      })
    } else {
      anime({
        targets: navWrapper.current,
        height: 0,
        easing: 'easeOutQuad'
      })
    }
  }
  const navWrapper = useRef(null)
  return (
    <nav>
      <span className="rs-button" onClick={swithcMenu}>
        <i className="im im-menu" />
      </span>
      <PageContent nav>
        <div className="nav-wrapper" ref={navWrapper}>
          <a href="/">Home</a>
          <a href="#info">Who am I ?</a>
          <a href="#experience">Experience</a>
          <a href="#github">Github profile</a>
        </div>
      </PageContent>

      <style jsx>{`
        nav {
          height: 60px;
          background-color: var(--blue-gray-bg-color);
          padding: 1px 0;
        }
        @media (min-width: 768px) {
          nav {
            height: auto;
            padding: auto;
            background-color: var(--blue-bg-color);
          }
        }
        .nav-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          flex-wrap: wrap;
          text-align: center;
          background: var(--blue-gray-bg-color);
          z-index: 3;
          width: 100%;
          visibility: hidden;
          margin-top: 59px;
        }
        @media (min-width: 768px) {
          .nav-wrapper {
            text-align: left;
            margin-top: 0;
            background: var(--blue-bg-color);
          }
        }
        nav .rs-button {
          cursor: pointer;
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 5;
          color: white;
        }
        @media (min-width: 768px) {
          nav .rs-button {
            display: none;
          }
        }
        .nav-wrapper a {
          padding: 0.6rem 1rem;
          width: 100%;
          transition: opacity 0.6s;
        }
        @media (min-width: 768px) {
          .nav-wrapper a {
            width: auto;
            padding: 1rem;
          }
        }
        .nav-wrapper a:last-child  {
          padding-bottom: 1.5rem;
        }
        @media (min-width: 768px) {
          .nav-wrapper a:last-child {
            padding: 1rem;
          }
        }
        .nav-wrapper a:hover {
          opacity: 0.6;
        }
      `}</style>
    </nav>
  )
}
