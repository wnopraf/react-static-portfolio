import React from 'react'
import PageContent from '../components/PageContent'

export default ({ children, style, id }) => (
  <section id={id} className={style}>
    <PageContent>{children}</PageContent>

    <style jsx>
      {`
        section {
          padding: 3rem 0;
        }
        .github {
          background-color: var(--pink-bg-color);
          color: var(--blue-bg-color);
          padding: 4rem 0;
        }
        .frameworks {
          background-color: rgb(249, 249, 249);
          color: var(--pink-bg-color);
          padding: 6rem 0;
        }
      `}
    </style>
  </section>
)
