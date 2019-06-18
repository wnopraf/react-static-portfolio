import React from 'react'
import PageContent from './PageContent'

export default () => (
  <footer>
    <PageContent>
      <p>
        Contact <small>Rapribu@gmail.com</small>
      </p>
      <p className="copyright">Copyrigth ©2019 Rafael Prieto</p>
    </PageContent>

    <style jsx>
      {`
        footer {
          padding-top: 3rem;
          text-align: center;
          background: rgb(77, 74, 74);
          color: rgb(214, 208, 208);
        }
        .copyright {
          margin-top: 3rem;
          margin-bottom: 0;
          padding: 0.5rem 0;
          text-align: left;
          font-size: 0.5rem;
          color: rgb(183, 183, 181);
        }
      `}
    </style>
  </footer>
)
