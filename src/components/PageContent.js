import React from 'react'

export default ({children, nav}) => <div className="page-content">
{children}
<style jsx>{`
  .page-content {
      position: relative;
      max-width: 100%;
      padding: 0 ${ nav ? 0 : '1rem'};
      margin: 0 auto;
  }
  @media (min-width: 768px) {
    .page-content {
      max-width: 768px;
    }
  @media (min-width: 1024px) {
    .page-content {
      max-width: 960px;
    }
  @media (min-width: 1310px) {
      .page-content {
        max-width: 1280px;
      }
      
  }
`}</style>
</div>