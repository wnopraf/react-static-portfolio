import React from 'react'
import PageContent from '../components/PageContent'
import Section from '../containers/Section'
import Frameworks from '../components/Frameworks'
import Info from '../components/Info'
import Github from '../components/Github'
import Grid from '../components/Grid'
import Footer from '../components/Footer'

import { useRouteData } from 'react-static'
export default () => <div className="page">
  <header>   
    <Grid text="Rafael Prieto Web Developer" /> 
  </header>

    <Section id="info">
      <Info/>
    </Section>
    <Section id="experience" style="frameworks">
      <Frameworks />
    </Section>
    <Section id="github" style="github">
      <Github />
    </Section>
    <Footer/>

</div>