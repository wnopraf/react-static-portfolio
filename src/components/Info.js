import React from 'react'

export default () => (
  <div className="info">
    <p className="info__text">
      Hi, i'm Rafa, a web developer focused on javascript and latest frontend
      trends.
    </p>
    <style jsx>
      {`
        .info {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .info__text {
          max-width: 500px;
          font-size: 1.6rem;
          line-height: 1.6;
          text-align: center;
          color: rgb(93, 90, 90);
        }
        @media(min-width: 460px) {
            .info__text {
              font-size: 2rem;
            }
        }
        @media(min-width: 460px) {
            .info__text {
              font-size: 2.3rem;
            }
        }
      `}
    </style>
  </div>
)
