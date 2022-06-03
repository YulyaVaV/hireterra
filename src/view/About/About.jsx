import React from 'react'
import AboutHeader from './component/AboutHeader/AboutHeader'
import AboutMain from './component/AboutMain/AboutMain'
import Message from './component/Message/Message'
import Team from './component/Team/Team'

function About() {
  return (
    <div>
      <AboutHeader />
      <AboutMain />
      <Team />
      <Message />
    </div>
  )
}

export default About